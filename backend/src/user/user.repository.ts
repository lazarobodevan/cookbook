import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository{
    private users: UserEntity[] = [];

    save(user: UserEntity){
        this.users.push(user);
        console.log(this.users);
        return user;
    }

    getById(id:string){
        return this.users.find(user =>{
            user.id === id
        });
    }
}
