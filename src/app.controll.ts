import { Controller, Get, Post, UseGuards , Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth/auth.service";


@Controller('app')
export class AppController
{
    constructor( private readonly authService : AuthService ) {}
    @Post ('/login')
    @UseGuards(AuthGuard ("local"))  // Authentication 
    login(@Request() req):string{

        const token=this.authService.generateToken(req.user)

        return token 
        //return req.user
    }

    @Get('/android-developer')
    @UseGuards(AuthGuard('jwt'))
    androidDeveloperData(): string
    {
        return `This is private data for android developer`
    }
   
}