import { Body, Controller, ForbiddenException, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import * as jwt from 'jsonwebtoken'
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
    
    constructor(private readonly authService: AuthService, private readonly userService:UserService){}

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Req() req: any){
        return await this.authService.login(req.user);
    }

    @Post('/validate')
    async validateToken(@Body() body:any){

            try{
                const decoded = jwt.verify(body.token, process.env.JWT_SECRET_KEY);
                const email = decoded['email']
                const {password, ...user} = await this.userService.getByEmail(email);
                return user;
                
            }catch(e){
                throw new ForbiddenException(e);
            }
    }
}
