export interface Book
{
    id:string
    title:string
    author:string
    published:string
}


// import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

// export class BookDto {
//   @IsUUID() // Ensures the ID is a valid UUID
//   id: string;

//   @IsString() // Ensures it is a string
//   @IsNotEmpty() // Ensures it is not empty
//   title: string;

//   @IsString()
//   @IsNotEmpty()
//   author: string;

//   @IsString()
//   @IsNotEmpty()
//   published: string;
// }
