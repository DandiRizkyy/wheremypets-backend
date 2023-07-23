import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Request,
  Post,
  UseGuards,
} from '@nestjs/common';
import { FoundService } from './found.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { CreatePost } from './dto/create-post.dto';
import { UpdatePost } from './dto/update-post.dto';

@Controller('found')
@ApiTags('found')
export class FoundController {
  constructor(private foundService: FoundService) {}

  // get all post
  @Get()
  async getAllPost() {
    return await this.foundService.getAllPosts();
  }

  // get post by id
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return await this.foundService.getPostById(id);
  }

  // create post
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post()
  async createPost(@Body() data: CreatePost) {
    return await this.foundService.createPost(data);
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
    return await this.foundService.updatePost(id, userId, data);
  }

  // delete post
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  async deletePost(@Param('id') id: string, @Request() req) {
    const userId = req.user.userId;
    return await this.foundService.deletePost(id, userId);
  }
}
