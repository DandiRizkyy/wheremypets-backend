import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'example@gmail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'example password' })
  password: string;
}
