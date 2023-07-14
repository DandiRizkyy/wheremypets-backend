/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  // business logic get all users
  async getAllUsers() {
    return await this.prismaService.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  // business logic get user by id
  async getUserById(id: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: id,
      },
      include: {
        foundPosts: true,
        findPosts: true,
      },
    });
    return instanceToPlain(user, { excludePrefixes: ['quantity', 'password'] });
  }

  // business logic delete user
  async deleteUser(id: string) {
    try {
      await this.prismaService.user.delete({
        where: {
          id: id,
        },
      });
      return `Data with id: ${id} successfully deleted.`;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(error.meta.cause);
      }
      throw error;
    }
  }
}
