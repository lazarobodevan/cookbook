import { Module } from "@nestjs/common";
import { CommentController } from "./comment.controller";
import { CommentRepository } from "./comment.respository";
import { CommentEntity } from "./comment.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentService } from "./comment.service";
import { UserService } from "src/user/user.service";
import { RecipeService } from "src/recipe/recipe.service";
import { UserEntity } from "src/user/user.entity";
import { RecipeEntity } from "src/recipe/recipe.entity";

@Module({
    imports:[TypeOrmModule.forFeature([CommentEntity, UserEntity, RecipeEntity])],
    controllers:[CommentController],
    providers: [CommentService, UserService, RecipeService]
})
export class CommentModule{

}