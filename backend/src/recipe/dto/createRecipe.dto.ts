import { IsInt, IsNotEmpty } from "class-validator";

export class CreateRecipeDTO{

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    ingredients: string;

    @IsNotEmpty()
    steps: string;

    @IsNotEmpty()
    userId: string;

    @IsNotEmpty()
    categories: string;

}