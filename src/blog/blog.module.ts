import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { PostController } from './post.controller';
import { PostService } from './services/post.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
   
  ],
  controllers: [
    PostController
  ],
  providers: [
      PostService
  ],
})
export class BlogModule {}
