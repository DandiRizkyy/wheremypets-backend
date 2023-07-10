import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUser {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
