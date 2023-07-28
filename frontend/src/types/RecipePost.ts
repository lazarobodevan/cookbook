import { Recipe } from "./Recipe";

export type RecipePost = {
    id:string;
    name:string
    recipename:string;
    ingredients:string
    steps: string;
    likes: number;
    comments:number;
    _createdAt: string;
}