import { Recipe } from "./Recipe";

export type RecipePost = {
    id:string;
    name:string;
    steps: string;
    ingredients:string
    likes: number;
    _createdAt: string;
    user:{
        id: string;
        name: string
    }
}