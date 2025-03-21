import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [PassportModule,UsersModule ,JwtModule.register({
    secret:"key",
    signOptions:{ expiresIn :"60s" }
  })],
  controllers: [],  // ✅ Register Controller
  providers: [LocalStrategy,AuthService,JwtStrategy],       // ✅ Register Service
  exports:[AuthService]
})
export class AuthModule {
  constructor() {
    console.log("App Module");
  }
}
