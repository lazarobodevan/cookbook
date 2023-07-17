import { Body, Controller, InternalServerErrorException, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { CreateCommentDTO } from "./dto/createComment.dto";
import { CommentService } from "./comment.service";
import { CommentEntity } from "./comment.entity";
import { RecipeService } from "src/recipe/recipe.service";
import { UserService } from "src/user/user.service";

@Controller('/comments')
export class CommentController{

    constructor(
        private commentService: CommentService,
        private recipeService: RecipeService,
        private userService: UserService
        ){}

    @Post()
    async createComment(@Body() commentDTO: CreateCommentDTO){
        try{
            const recipe = await this.recipeService.getById(commentDTO.recipeId);
            const user = await this.userService.getById(commentDTO.userId);

            const commentEntity = new CommentEntity();
            commentEntity.comment = commentDTO.comment;
            commentEntity.recipe = recipe;
            commentEntity.user = user;

            const comment = await this.commentService.createComment(commentEntity);
            return {
                comment,
                message: 'Comment created successfully'
            };
        }catch(e){
            console.log(e);
            throw new InternalServerErrorException(e.message);
        }
    }

    @Put('/:id')
    async updateComment(@Param('id', new ParseUUIDPipe()) id: string,@Body() comment: string){
        try{
            const commentEntity = new CommentEntity();
            commentEntity.id = id;
            commentEntity.comment = comment;
            this.commentService.updateComment(commentEntity);
        }catch(e){
            console.log(e);
            return new InternalServerErrorException(e.message);
        }
    }
    
}