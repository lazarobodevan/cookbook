import { IsNotEmpty, IsString } from "class-validator";

export class CreateCommentDTO{
    
    @IsString()
    @IsNotEmpty()
    comment: string;

    
    @IsString()
    @IsNotEmpty()
    userId: string;

    
    @IsString()
    @IsNotEmpty()
    recipeId: string

}