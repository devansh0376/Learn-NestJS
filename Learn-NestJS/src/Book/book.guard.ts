import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class BookGuard implements CanActivate
{
    
     canActivate(context: ExecutionContext): boolean
     {
        console.log('This is Guard')
        return true
     }
}