import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseUUIDPipe, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { ListUserDTO } from "./dto/listUser.dto";
import { UserService } from "./user.service";

@Controller('/users')
export class UserController{

    constructor(
        private userService: UserService
    ){}

    @Post()
    async createUser(@Body() user: CreateUserDTO){

        const userEntity = new UserEntity();

        userEntity.email = user.email;
        userEntity.password = user.password;
        userEntity.name = user.name;

        const foundUser = await this.userService.getByEmail(userEntity.email);

        //Throw error if user already exists
        if(foundUser){
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
        }

        this.userService.createUser(userEntity);
        
        return {
            user: new ListUserDTO(userEntity.id, userEntity.name, userEntity.email),
            message: 'User created successfully'
        };
    }

    @Get('/:id')
    async getUser(@Param('id', new ParseUUIDPipe()) id: string){
        const user = await this.userService.getById(id);
        return {
            user: new ListUserDTO(user.id, user.name, user.email)
        }
    }

    @Get('/likes/:userid')
    async getLikedRecipes(@Param('userId') userId:string){
        return await this.userService.getLikedRecipes(userId);
    }

}

