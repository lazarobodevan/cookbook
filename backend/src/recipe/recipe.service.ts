import { InjectRepository } from "@nestjs/typeorm";
import { RecipeEntity } from "./recipe.entity";
import { Repository } from "typeorm";

export class RecipeService{
    constructor(
        @InjectRepository(RecipeEntity)
        private readonly recipeRepository: Repository<RecipeEntity>
    ){}

    async createRecipe(recipeEntity: RecipeEntity){
        return await this.recipeRepository.save(recipeEntity);
    }

    async getById(id: string){
        return await this.recipeRepository.findOne({where:{id}});
    }

    async getRecipes(){
        return await this.recipeRepository.query(`
            SELECT recipes.id, recipes.name, "ingredients", "steps", "categories", "likes", users.name, COUNT(c) as comments
            FROM public.recipes
            INNER JOIN users
            on "userId" = users.id

            INNER JOIN public.comments as c
            on recipes.id = "recipeId"

            GROUP BY recipes.id, users.name
        `)
    }

    async updateLikesNumber(recipeEntity: RecipeEntity){
        return await this.recipeRepository.save(recipeEntity);
    }
}