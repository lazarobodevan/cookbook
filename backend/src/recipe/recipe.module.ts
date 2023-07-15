import { Module } from "@nestjs/common";
import { RecipeEntity } from "./recipe.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RecipeController } from "./recipe.controller";

@Module({
    imports:[TypeOrmModule.forFeature([RecipeEntity])],
    controllers:[RecipeController]
})
export class RecipeModule{

}