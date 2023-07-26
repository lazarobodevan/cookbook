import { Body, Controller, ForbiddenException, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import * as jwt from 'jsonwebtoken'

@Controller('auth')
export class AuthController {
    
    constructor(private readonly authService: AuthService){}

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Req() req: any){
        return await this.authService.login(req.user);
    }

    @Post('/validate')
    async validateToken(@Body() body:any){

            const isValid = jwt.verify(body.token, process.env.JWT_SECRET_KEY, function(err, decoded){
                if(err)
                    throw new ForbiddenException(err);
                return decoded;
            });
    }
}
