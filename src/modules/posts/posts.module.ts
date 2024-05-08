import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsRepository } from './posts.repository';
import { PostsService } from './posts.service';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  controllers: [PostsController],
  providers: [PostsService, PostsRepository],
})
export class PostsModule {}
