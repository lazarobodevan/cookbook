import { RecipeEntity } from "src/recipe/recipe.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'comments'})
export class CommentEntity{

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @ManyToOne(()=> UserEntity, (userEntity)=> userEntity.comments)
    user: string;

    @Column({name:'comment', length:255, nullable: false})
    comment: string;

    @ManyToOne(()=>RecipeEntity, (recipeEntity) => recipeEntity.comments)
    recipie: RecipeEntity;

    @CreateDateColumn()
    _createdAt: Date;
}