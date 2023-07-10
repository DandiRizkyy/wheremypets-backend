import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePost {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  image: string;
  @IsNumber()
  @IsOptional()
  userId: number;
}
