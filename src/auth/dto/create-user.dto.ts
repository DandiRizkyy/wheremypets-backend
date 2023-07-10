/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUser {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'user@gmail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'example password' })
  password: string;
}
