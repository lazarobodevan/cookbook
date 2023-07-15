import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CommentEntity } from "./comment.entity";
import { Repository } from "typeorm";

@Injectable()
export class CommentService{

    constructor(
        @InjectRepository(CommentEntity)
        private readonly commentRepository: Repository<CommentEntity>,
    ){}

    async createComment(commentEntity: CommentEntity){
        //await this.commentRepository.save(commentEntity);
        return 'User created';
    }

}