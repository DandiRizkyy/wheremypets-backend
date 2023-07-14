/* eslint-disable prettier/prettier */
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUser } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class AuthService {
  private readonly bcryptRound: number;
  constructor(
    // private usersService: UsersService,
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {
    this.bcryptRound = parseInt(process.env['BCRYPT_SALT_ROUND']) || 10;
  }

  // Business Logic Register User
  async registerUser(createUserDto: CreateUser) {
    const hashPassword = bcrypt.hashSync(
      createUserDto.password,
      this.bcryptRound,
    );
    try {
      const user = await this.prismaService.user.create({
        data: {
          name: createUserDto.name,
          email: createUserDto.email,
          password: hashPassword,
        },
      });

      return instanceToPlain(user, { excludePrefixes: ['password'] });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Email already exists');
      }
      throw error;
    }
  }

  // Business Logic Login User
  async loginUser(loginUserDto: LoginDto) {
    const user = await this.prismaService.user.findUnique({
      where: { email: loginUserDto.email },
    });
    if (!user) {
      throw new UnauthorizedException(`Invalid email or password`);
    }

    const isPasswordMatch = bcrypt.compareSync(
      loginUserDto.password,
      user.password,
    );

    if (!isPasswordMatch) {
      throw new UnauthorizedException(`Invalid email or password`);
    }

    const payload = { userId: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
