import { Recipe } from "./Recipe";

export type RecipePost = {
    recipe:Recipe,
    user:{
        name:string
    }
}