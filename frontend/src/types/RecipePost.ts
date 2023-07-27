import { Recipe } from "./Recipe";

export type RecipePost = {
    id:string;
    recipename:string;
    steps: string;
    ingredients:string
    likes: number;
    _createdAt: string;
    name:string
}