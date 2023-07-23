import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePost } from './dto/create-post.dto';
import { UpdatePost } from './dto/update-post.dto';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class FoundService {
  constructor(private prismaService: PrismaService) {}

  // get all posts

  async getAllPosts() {
    return await this.prismaService.found.findMany();
  }

  // get post by id
  async getPostById(id: string) {
    const user = await this.prismaService.found.findFirst({
      where: {
        id: id,
      },
      include: {
        user: true,
      },
    });
    return instanceToPlain(user, { excludePrefixes: ['password'] });
  }

  // create post
  async createPost(data: CreatePost) {
    return await this.prismaService.found.create({
      data: data,
    });
  }

  // update post
  async updatePost(id: string, userId: string, data: UpdatePost) {
    // check if the post exists and belongs to the current user
    const post = await this.prismaService.found.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!post) {
      throw new NotFoundException(
        'Post not found or you are not the owner of the post',
      );
    }

    return await this.prismaService.found.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  // delete post
  async deletePost(id: string, userId: string) {
    // check if the post exists and belongs to the current user

    const post = await this.prismaService.found.findFirst({
      where: {
        id,
        userId, // current userId
      },
    });

    if (!post) {
      throw new NotFoundException(
        'Post not found or you are not the owner of the post',
      );
    }

    return await this.prismaService.found.delete({
      where: {
        id: id,
      },
    });
  }
}
