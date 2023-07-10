import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePost } from './dto/create-post.dto';
import { UpdatePost } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  // get all posts

  async getAllPosts() {
    return await this.prismaService.post.findMany();
  }

  // get post by id
  async getPostById(id: number) {
    return await this.prismaService.post.findUnique({
      where: {
        id: id,
      },
    });
  }

  // create post
  async createPost(data: CreatePost) {
    return await this.prismaService.post.create({
      data: data,
    });
  }

  // update post
  async updatePost(id: number, data: UpdatePost) {
    return await this.prismaService.post.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  // delete post
  async deletePost(id: number) {
    return await this.prismaService.post.delete({
      where: {
        id: id,
      },
    });
  }
}
