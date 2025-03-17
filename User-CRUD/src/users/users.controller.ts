import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from 'src/models/users.dto';

@Controller('users')
export class UsersController 
{
    constructor(private userService : UserService)
    {

    }
    @Get('/find')
    getAlluser() : User[] // all user
    {
        return this.userService.getAllUserService()
    }
    @Get('/find/:id')
    getUserById(@Param('id') id: string): User | string 
    {
        return this.userService.getUserById(Number(id))
    }
    @Post('/add')
    addUser(@Body() user: User):User
    {
        return this.userService.addUserService(user)
    }

    @Put('/update/:id')
    updateUser(@Param('id') id: string, @Body() user: User): string 
    {
        return this.userService.updateUserService(Number(id), user);
    }


    @Delete('/delete/:id')
    deleteuser(@Param('id') id:string):string
    {
        return this.userService.deleteUserService(Number(id))
    }
}
