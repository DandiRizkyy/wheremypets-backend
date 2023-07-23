import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { FindService } from './find.service';
import { CreatePost } from './dto/create-post.dto';
import { UpdatePost } from './dto/update-post.dto';

@Controller('find')
@ApiTags('find')
export class FindController {
  constructor(private findService: FindService) {}

  // get all post
  @Get()
  async getAllPost() {
    return await this.findService.getAllPosts();
  }

  // get post by id
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return await this.findService.getPostById(id);
  }

  // create post
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post()
  async createPost(@Body() data: CreatePost) {
    return await this.findService.createPost(data);
  }

  // update post
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Patch(':id')
  async updatePost(
    @Param('id') id: string,
    @Request() req,
    @Body() data: UpdatePost,
  ) {
    const userId = req.user.userId;
    return await this.findService.updatePost(id, userId, data);
  }

  // delete post
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  async deletePost(@Param('id') id: string, @Request() req) {
    const userId = req.user.userId;
    return await this.findService.deletePost(id, userId);
  }
}
