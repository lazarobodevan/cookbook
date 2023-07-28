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
        return this.commentRepository.save(commentEntity);
    }

    async updateComment(commentEntity: CommentEntity){
        return this.commentRepository.save({
            comment: commentEntity.comment
        })
    }

    async getComments(postId:string){
        return await this.commentRepository.find({
            where:{
                recipe:{
                    id: postId
                }
            },
            relations:{
                user:true
            }
        })
    }

}