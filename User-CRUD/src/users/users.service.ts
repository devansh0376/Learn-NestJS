import { Injectable } from '@nestjs/common';
import { User } from 'src/models/users.dto';

@Injectable()
export class UserService
{
    private users : User[] =[]
    private idCounter = 1;
    addUserService(newUser : User) 
    {
        newUser.id = this.idCounter++
        this.users.push(newUser)
        return newUser
    }

    getAllUserService()
    {
        return this.users
    }
    getUserById(id:number)
    {
        const user = this.users.find((user)=>user.id == id)
        if (!user) 
        {
            return `User with ID ${id} not found`;
        }
    
        return user;

    }
    updateUserService(id: number, user : User):string
    {
        const userIndex = this.users.findIndex((u) => u.id === id);
    
        if (userIndex === -1) 
        {
            return `User with ID ${id} not found`;
        }
        this.users[userIndex]={...user , id}
        return `User  has successfully Upadted `
    }
    deleteUserService(userId : number)
    {
        this.users= this.users.filter((user)=>{ //we loop and find the user that we want to delete.so we reinialize whole books object 
            return user.id !==userId
        })
        return `User is successfully deleted `
    }

}