import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";


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

    async findUser(where?:object, relations?:object){
        return await this.userRepository.findOne({
            where:where,
            relations:relations
        })
    }

    async getById(id: string, relations?:object){
        try{
            const user = await this.userRepository.findOne({
                where:{
                    id: id
                },
                relations
            });

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

    async saveUser(userEntity:UserEntity){
        const result = await this.userRepository.save(userEntity);
        return result;
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
}