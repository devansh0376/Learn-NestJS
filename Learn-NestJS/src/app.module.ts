import { Module } from '@nestjs/common';
import { BookModule } from './Book/book.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controll';


@Module({
  imports: [BookModule, UsersModule,AuthModule],
  controllers: [AppController],  // ✅ Register Controller
  providers: [],       // ✅ Register Service
  exports:[]
})
export class AppModule {
  constructor() {
    console.log("App Module");
  }
}
