/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUser {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'example@gmail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'examplename' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'example password' })
  password: string;
}
