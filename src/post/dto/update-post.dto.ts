import { IsOptional, IsString } from 'class-validator';

export class UpdatePost {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  name?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  image?: string;
}
