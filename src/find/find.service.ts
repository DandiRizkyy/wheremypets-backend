import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePost } from './dto/create-post.dto';
import { UpdatePost } from './dto/update-post.dto';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class FindService {
  constructor(private prismaService: PrismaService) {}

  // get all posts

  async getAllPosts() {
    return await this.prismaService.find.findMany();
  }

  // get post by id
  async getPostById(id: string) {
    const user = await this.prismaService.find.findFirst({
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
    return await this.prismaService.find.create({
      data: data,
    });
  }

  // update post
  async updatePost(id: string, userId: string, data: UpdatePost) {
    // check if the post exists and belongs to the current user
    const post = await this.prismaService.find.findFirst({
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

    return await this.prismaService.find.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  // delete post
  async deletePost(id: string, userId: string) {
    // check if the post exists and belongs to the current user

    const post = await this.prismaService.find.findFirst({
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

    return await this.prismaService.find.delete({
      where: {
        id: id,
      },
    });
  }
}
