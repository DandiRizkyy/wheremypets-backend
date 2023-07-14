import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdatePost {
  @ApiProperty()
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  locationDetail?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  species?: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isFound: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  image?: string;
}
