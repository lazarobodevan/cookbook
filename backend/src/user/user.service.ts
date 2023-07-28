import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { RecipeEntity } from "src/recipe/recipe.entity";


@Injectable()
export class UserService{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    async createUser(userEntity: UserEntity){
        try{
            const user = await this.userRepository.save(userEntity);
            return user;
        }catch(e){
            console.log(e);
            throw new InternalServerErrorException('Error while creating user');
        }
    }

    async getById(id: string){
        try{
            const user = await this.userRepository.findOne({where:{
                id: id
            }});

            return user;
        }catch(e){
            throw new InternalServerErrorException('Error while searching user');
        }
    }

    
    async getByEmail(email: string){
        try{
            const user = await this.userRepository.findOne({where:{
                email
            }});

            return user;
        }catch(e){
            throw new InternalServerErrorException('Error while searching user');
        }
    }

    async getLikedPostById(postId: string, userId: string){
        return await this.userRepository.findOne({where:{
            likes:{
                id: postId
            },
            id: userId
        }});
    }

    async deleteLikedPost(postId:string, user:UserEntity){
        let userEntity = await this.userRepository.findOne({
            relations:{
                likes: true
            },
            where:{
                id: user.id
            }
        })

        const newLikes = userEntity.likes.filter(post => {
            post.id != postId
        });
        userEntity.likes = newLikes;

        const result = await this.userRepository.save(userEntity);
        return result;
        
     }

     async addLikedPost(userEntity: UserEntity){
        return await this.userRepository.save(userEntity);
     }

     async getLikedRecipes(userId: string){
        return await this.userRepository.findOne({
            relations:{
                likes:true
            },
            where:{
                id:userId
            },
            select:{
                likes:{
                    id:true
                }
            }
        });
     }

     async test(userId:string){
        return await this.userRepository.findOne({
            where:{
                id: userId
            },
            relations:{
                likes:true
            }
        })
     }
}