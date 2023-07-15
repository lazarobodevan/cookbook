import { CommentEntity } from "src/comment/comment.entity";
import { RecipeEntity } from "src/recipe/recipe.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'users'})
export class UserEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name:'name', length: 100, nullable:false})
    name: string;

    @Column({name:'email', length: 70, nullable:false})
    email: string;

    @Column({name:'password', length: 255, nullable:false})
    password: string;

    @OneToMany(()=> RecipeEntity, (recipeEntity) => recipeEntity.user)
    recipies?: RecipeEntity[]

    @ManyToMany(()=> UserEntity, {cascade: true})
    @JoinTable()
    following?: UserEntity[]

    @OneToMany(()=> CommentEntity, (commentEntity)=> commentEntity.user)
    comments?: CommentEntity[]

    @ManyToMany(()=> RecipeEntity, {cascade: true})
    @JoinTable()
    likes?: RecipeEntity[]

    @CreateDateColumn({name: 'created_at'})
    createdAt: string;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: string;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: string;

    
}