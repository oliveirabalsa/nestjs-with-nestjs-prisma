import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.post.findMany();
  }

  async create(data: CreatePostDto) {
    return this.prismaService.post.create({
      data,
    });
  }
}
