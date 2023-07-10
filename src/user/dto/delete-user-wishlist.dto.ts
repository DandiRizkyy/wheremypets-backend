/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class DeleteWishlistInsideUser {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 1 })
  wishlistsId: number;
}
