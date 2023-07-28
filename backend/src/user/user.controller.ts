import { Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, ParseUUIDPipe, Post, UseGuards } from "@nestjs/common";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { ListUserDTO } from "./dto/listUser.dto";
import { UserService } from "./user.service";
import { AuthGuard } from "@nestjs/passport";

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

        const createdUser = await this.userService.createUser(userEntity);
        
        return {
            user: new ListUserDTO(createdUser.id, createdUser.name, createdUser.email),
            message: 'User created successfully'
        };
    }

    @Get('/:id')
    @UseGuards(AuthGuard('jwt'))
    async getUser(@Param('id', new ParseUUIDPipe()) id: string){
        const where = {
            id
        }
        const user = await this.userService.findUser(where);
        return {
            user: new ListUserDTO(user.id, user.name, user.email)
        }
    }

    @Get('/likes/:userId')
    @UseGuards(AuthGuard('jwt'))
    async getLikedRecipes(@Param('userId') userId:string){
        const relations = {
            likes:true
        }
        const where = {
            id: userId
        }
        const user = await this.userService.findUser(where, relations);
        if(!user)
            throw new NotFoundException('User not found')

        return user.likes;
    }

}

