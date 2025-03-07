import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/user.entity";

@Injectable()
export class AuthService{

    constructor(private readonly JwtService : JwtService)
    {

    }
    //id card
    generateToken(payload :User) :string 
    {
        return this.JwtService.sign(payload)
    }

}