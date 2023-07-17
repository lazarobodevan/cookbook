import { Module } from "@nestjs/common";
import { RecipeEntity } from "./recipe.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RecipeController } from "./recipe.controller";
import { UserEntity } from "src/user/user.entity";
import { RecipeService } from "./recipe.service";
import { UserService } from "src/user/user.service";

@Module({
    imports:[TypeOrmModule.forFeature([RecipeEntity, UserEntity])],
    controllers:[RecipeController],
    providers:[RecipeService, UserService]
})
export class RecipeModule{

}