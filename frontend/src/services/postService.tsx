import FetchAPI from "../common/Fetch";
import { RecipePost } from "../types/RecipePost";

class PostService{
    
    public async getRecipes():Promise<RecipePost[]>{
        const resp =  await FetchAPI('/recipes','GET');
        return resp;
    }
}

export default new PostService();