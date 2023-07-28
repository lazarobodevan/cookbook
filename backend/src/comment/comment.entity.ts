import { RecipeEntity } from "src/recipe/recipe.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'comments'})
export class CommentEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=> UserEntity, (userEntity)=> userEntity.comments, {nullable:false})
    user!: UserEntity;

    @Column({name:'comment', length:255, nullable: false})
    comment: string;

    @ManyToOne(()=>RecipeEntity, (recipeEntity) => recipeEntity.comments, {nullable: false})
    recipe!: RecipeEntity;

    @CreateDateColumn()
    _createdAt: string;
}