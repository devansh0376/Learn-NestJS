import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    public users: User[] = [
        {
            username: "User1",
            password: "admin",
            email: "user1@gmail.com",
            age:21
        },
        {
            username: "User2",
            password: "admin",
            email: "user2@gmail.com",
            age:22
        },
        {
            username: "User3",
            password: "admin",
            email: "user3@gmail.com",
            age:23
        },
    ];

    getUserByName(userName: string): User | undefined {
        return this.users.find((user: User) => user.username === userName);
    }
}
 