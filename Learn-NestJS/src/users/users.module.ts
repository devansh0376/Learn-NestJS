import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UserService],
  exports : [UserService]
})
export class UsersModule {}
