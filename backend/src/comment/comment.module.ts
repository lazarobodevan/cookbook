import { Module } from "@nestjs/common";
import { CommentController } from "./comment.controller";
import { CommentRepository } from "./comment.respository";
import { CommentEntity } from "./comment.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentService } from "./comment.service";

@Module({
    imports:[TypeOrmModule.forFeature([CommentEntity])],
    controllers:[CommentController],
    providers: [CommentService]
})
export class CommentModule{

}