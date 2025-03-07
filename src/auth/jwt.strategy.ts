import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt"; // ✅ Import from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') { // ✅ Corrected strategy name
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // ✅ Extract JWT from Bearer token
            ignoreExpiration: false, // ✅ Reject expired tokens
            secretOrKey: "key", // ✅ Use the secret key for verification
        });
    }

    validate(payload: any): any{ // ✅ Ensure 'async' for consistency
        return payload
    }
}
