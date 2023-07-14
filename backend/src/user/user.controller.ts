import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";

@Controller('/users')
export class UserController{

    constructor(private userRepository: UserRepository){}

    @Post()
    async createUser(@Body() user: CreateUserDTO){

        const userEntity = new UserEntity();

        userEntity.email = user.email;
        userEntity.password = user.password;
        userEntity.name = user.name;

        let userCreated = this.userRepository.save(userEntity);

        return userCreated;
    }

    @Get('/:id')
    async getUser(@Param('id') id){
        return this.userRepository.getById(id);
    }

}

