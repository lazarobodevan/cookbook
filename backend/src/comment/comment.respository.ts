

export class CommentRepository{
    private comments = [];

    save(comment){
        this.comments.push(comment);
    }

    getByRecipe(recipeId){
        const comments = this.comments.map(comment =>{
            if( comment.recipeId === recipeId) return comment;
        });

        return comments;
    }
}