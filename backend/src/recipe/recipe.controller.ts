import { Body, Controller, Get, HttpException, HttpStatus, InternalServerErrorException, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { RecipeEntity } from "./recipe.entity";
import { CreateRecipeDTO } from "./dto/createRecipe.dto";
import { UserService } from "src/user/user.service";
import { RecipeService } from "./recipe.service";

@Controller('/recipes')
export class RecipeController{

    constructor(
        private userService: UserService,
        private recipeService: RecipeService
    ){}

    @Post()
    async createRecipe(@Body() recipeDTO: CreateRecipeDTO){
        try{
            const recipeEntity = new RecipeEntity();

            const user = await this.userService.getById(recipeDTO.userId);

            recipeEntity.name = recipeDTO.name;
            recipeEntity.categories = recipeDTO.categories;
            recipeEntity.steps = recipeDTO.steps;
            recipeEntity.ingredients = recipeDTO.ingredients;
            recipeEntity.user = user; 

            const recipe = await this.recipeService.createRecipe(recipeEntity);
            return recipe;
        }catch(e){
            console.log(e);
            throw new InternalServerErrorException(e.message);
        }
    }

    @Get()
    async getRecipes(){
        try{
            const recipes = await this.recipeService.getRecipes();

            return recipes;
            
        }catch(e){
            console.log(e);
            throw new InternalServerErrorException(e.message);
        }
    }

    @Put('/like/:postId/:userId')
    async likeOrDislike(
        @Param('postId', new ParseUUIDPipe()) postId:string, 
        @Param('userId', new ParseUUIDPipe()) userId:string
    ){
 
        //Check if post exists
        let post = await this.recipeService.getById(postId);
        if(!post){
            throw new HttpException('Post not found', HttpStatus.BAD_REQUEST);
        }

        //Check if user exists
        let user = await this.userService.test(userId);
        if(!user){
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }

        //Check if post is already liked
        // - If yes, then remove the post relationship with the user and decrement the number
        const isPostLiked = await this.userService.getLikedPostById(postId, userId);
        if(isPostLiked){
            post.likes--;
            await this.userService.deleteLikedPost(postId, user);
            await this.recipeService.updateLikesNumber(post);

            return {
                message:'Post unliked'
            }
        }


        //Check if post is already liked
        // - If not, add an ocurrence in the relationship and add 1 to the likes number
        if(!isPostLiked){

            const likedRecipes = await this.userService.getLikedRecipes(user.id);

            if(!likedRecipes.likes.length){
                console.log('entrei')
                user.likes = [];
            }
            console.log(user.likes)
            user.likes.push(post)
            post.likes++;
            await this.userService.addLikedPost(user);
            await this.recipeService.updateLikesNumber(post);

            return{
                message:'Post liked'
            }
        }

        

        
    }

}