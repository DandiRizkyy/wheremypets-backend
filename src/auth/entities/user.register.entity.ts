/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserRegisterEntity implements User {
  @ApiProperty({ default: 1 })
  id: number;

  @ApiProperty({ default: 'user@gmail.com' })
  email: string;

  password: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
