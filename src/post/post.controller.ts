import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { CreatePost } from './dto/create-post.dto';
import { UpdatePost } from './dto/update-post.dto';

@Controller('post')
@ApiTags('post')
export class PostController {
  constructor(private postService: PostService) {}

  // get all post
  @Get()
  async getAllPost() {
    return await this.postService.getAllPosts();
  }

  // get post by id
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  async getPostById(@Param('id') id: number) {
    return await this.postService.getPostById(id);
  }

  // create post
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post()
  async createPost(@Body() data: CreatePost) {
    return await this.postService.createPost(data);
  }

  // update post
  @ApiBearerAuth()
  @Patch(':id')
  async updatePost(@Param('id') id: number, @Body() data: UpdatePost) {
    return await this.postService.updatePost(id, data);
  }

  // delete post
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  async deletePost(@Param('id') id: number) {
    return await this.postService.deletePost(id);
  }
}
