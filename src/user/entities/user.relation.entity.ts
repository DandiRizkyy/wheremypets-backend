/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserRelationEntity implements User {
  @ApiProperty({ default: 1 })
  id: number;

  @ApiProperty({ default: 'Example Email' })
  email: string;
  password: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
