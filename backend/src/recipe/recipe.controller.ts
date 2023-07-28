import { Body, Controller, Get, HttpException, HttpStatus, InternalServerErrorException, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { RecipeEntity } from "./recipe.entity";
import { CreateRecipeDTO } from "./dto/createRecipe.dto";
import { UserService } from "src/user/user.service";
import { RecipeService } from "./recipe.service";
import { ListRecipeDTO } from "./dto/listRecipe.dto";

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
            return new ListRecipeDTO(
                {
                    id: recipe.id,
                    name: recipe.name,
                    ingredients: recipe.ingredients,
                    steps: recipe.steps,
                    categories: recipe.categories,
                    likes: recipe.likes,
                    comments: 0,
                    _createdAt: recipe._createdAt
                },
                {
                    name: recipe.user.name
                }
            );
        }catch(e){
            console.log(e);
            throw new InternalServerErrorException(e.message);
        }
    }

    @Get()
    async getRecipes(){
        try{
            const recipes = await this.recipeService.getRecipes();

            return recipes.map(item =>{
                return new ListRecipeDTO(
                    {
                        id: item.id,
                        name: item.recipename,
                        ingredients: item.ingredients,
                        steps: item.steps,
                        categories: item.categories,
                        likes: item.likes,
                        comments: parseInt(item.comments),
                        _createdAt: item._createdAt
                    },
                    {
                        name: item.name
                    },
                    )
                
            })
            
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
        const relations = {
            likes:true
        }
        let user = await this.userService.getById(userId, relations);
        if(!user){
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }

        //Check if post is already liked
        // - If yes, then remove the post relationship with the user and decrement the number
        const isPostLiked = user.likes.some(item => item.id === post.id)

        if(isPostLiked){
            post.likes--;
            user.likes = user.likes.filter(item => item.id != post.id);
            await this.userService.saveUser(user);
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
                user.likes = [];
            }
            user.likes.push(post)
            post.likes++;
            await this.userService.saveUser(user);
            await this.recipeService.updateLikesNumber(post);

            return{
                message:'Post liked'
            }
        }

        

        
    }

}