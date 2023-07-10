import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class PatchUser {
  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}
