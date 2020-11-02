import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from '../entities/post.entity';
import { CreatePostDTO } from '../dtos/create-post.dto';
import { PostDto } from '../dtos/post.dto';
import * as _ from 'lodash';
import { EditPostDTO } from '../dtos/edit-post.dto';

@Injectable()
export class PostService{

    constructor(@InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>, ) {}

    public findAll(): Observable<PostEntity[]> {
        return from(this.postRepository.find())
        .pipe(
            map((posts => _.orderBy(posts, ['id'], ['desc']))
            )
    }

    public create(createPostDTO: CreatePostDTO): Promise<PostDto> {
        return this.postRepository.save(createPostDTO);
    }

    public edit(editPostDto: EditPostDTO): Promise<PostDto>{
        return this.postRepository.save(editPostDto);
    }

    public delete(postId: number): Promise<DeleteResult>{
        return this.postRepository.delete(postId);
    }
}