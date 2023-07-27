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
        return await this.recipeRepository.find({
            order:{
                _createdAt: 'DESC'
            },
            relations:{user:true},
            select:{user:{name:true, id:true}}
        })
    }

    async updateLikesNumber(recipeEntity: RecipeEntity){
        return await this.recipeRepository.save(recipeEntity);
    }
}