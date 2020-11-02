import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Observable } from "rxjs";
import { DeleteResult } from "typeorm";
import { CreatePostDTO } from "./dtos/create-post.dto";
import { EditPostDTO } from "./dtos/edit-post.dto";
import { PostDto } from "./dtos/post.dto";
import { PostEntity } from "./entities/post.entity";
import { PostService } from "./services/post.service";

@Controller('posts')
export class PostController{

    constructor(private postService: PostService) {}

    @Get()
    findAll(): Observable<PostEntity[]> {
        return this.postService.findAll();
    }

    @Post()
    create(@Body() createPostDTO: CreatePostDTO): Promise<PostDto>{
        return this.postService.create(createPostDTO);
    }

    @Put()
    edit(@Body() editPostDto: EditPostDTO): Promise<PostDto>{
        return this.postService.edit(editPostDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<DeleteResult>{
        return this.postService.delete(id);
    }
}