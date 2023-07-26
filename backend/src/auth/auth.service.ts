import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService, 
        private readonly jwtService: JwtService
    ){}

    async validateUser(email: string, password: string){
        let user: UserEntity;
        try{
            user = await this.userService.getByEmail(email);
        }catch(e){
            return null;
        }

        const isPasswordValid = compareSync(password, user.password);

        if(!isPasswordValid) return null;

        return user;
    }

    async login(user: UserEntity){
        const payload = {
            sub: user.id,
            email: user.email,
        };

        return {
            user:{
                id: user.id,
                name: user.name,
                email: user.email
            },
            token: this.jwtService.sign(payload)
        };
    }
}
