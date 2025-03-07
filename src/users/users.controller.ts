import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';


@Controller('users')
export class UsersController {
  
  @Post()
  
  addUser() 
  {
    //throw new Error('Something went wrong!');
    return `This api will add user`
  }

  @Get()
  findAllUser() 
  {
    return `This api will return all users`
  }
}
