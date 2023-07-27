import { useContext } from "react";
import FetchAPI from "../common/Fetch";
import { RecipePost } from "../types/RecipePost";

class PostService{
    
    public async getRecipes():Promise<RecipePost[]>{
        const resp =  await FetchAPI('/recipes','GET');
        return resp;
    }

    public async getLikedRecipes(userId:string){
        const resp = await FetchAPI(`/users/likes/${userId}`,'GET');
        return resp.likes;
    }

    public async likeRecipe(recipeId:string, userId:string){
        const resp = await FetchAPI(`/like/${recipeId}/${userId}`,'PUT');
    }
}

export default new PostService();