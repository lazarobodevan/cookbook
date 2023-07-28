import { useContext } from "react";
import FetchAPI from "../common/Fetch";
import { RecipePost } from "../types/RecipePost";
import { NewPost } from "../types/NewPost";

class PostService{
    
    public async getRecipes():Promise<RecipePost[]>{
        const resp =  await FetchAPI('/recipes','GET');
        return resp;
    }

    public async getLikedRecipes(userId:string){
        const resp = await FetchAPI(`/users/likes/${userId}`,'GET');
        return resp;
    }

    public async likeRecipe(recipeId:string, userId:string){
        return await FetchAPI(`/recipes/like/${recipeId}/${userId}`,'PUT');
    }

    public async createNewPost(data:NewPost){
        return await FetchAPI('/recipes','POST', data);
    }
}

export default new PostService();