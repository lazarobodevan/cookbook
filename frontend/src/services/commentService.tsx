import { useContext } from "react";
import FetchAPI from "../common/Fetch";
import { AuthContext } from "../contexts/Auth/AuthContext";

class CommentService{
    public async getCommentsFromPost(postId: string){
        return await FetchAPI(`/recipes/comments/${postId}`, 'GET');
    }

    public async createNewComment(postId:string, userId:string, comment:string){
        return await FetchAPI(`/recipes/comments`,'POST', {
            comment,
            recipeId: postId,
            userId
        });
    }
}

export default new CommentService();