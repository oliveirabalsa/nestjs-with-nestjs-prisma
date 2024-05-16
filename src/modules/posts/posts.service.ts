import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}
  create(createPostDto: CreatePostDto) {
    return this.postsRepository.create(createPostDto);
  }

  async findAll() {
    return this.postsRepository.findAll();
  }

  async findOne(id: string) {
    return this.postsRepository.findOne(id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
