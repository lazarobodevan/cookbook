import { CommentEntity } from "src/comment/comment.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'recipes'})
export class RecipeEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'name', length: 50, nullable: false})
    name: string;

    @Column({name:'ingredients', nullable: false})
    ingredients: string;

    @Column({name:'steps', nullable: false})
    steps: string;

    @Column({name:'categories', nullable: false})
    categories: string;

    @Column({name: 'likes'})
    likes: number;

    @OneToMany(()=> CommentEntity, (commentEntity) => commentEntity.recipie)
    comments: CommentEntity[];

    @ManyToOne(()=> UserEntity, (userEntity)=>userEntity.recipies)
    user: UserEntity;

    @CreateDateColumn()
    _createdAt: string;

}