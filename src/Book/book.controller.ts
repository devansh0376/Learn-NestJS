import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common" ;
import { BookService } from './book.service';
import { Book } from "./data/book.dto";
import { BookGuard } from "./book.guard";




@Controller("book")
export class BookController
{
    //nest js provide me with the object 
    constructor(private bookService : BookService) // ✅ Inject service
    {
        
    }

    //public bookService : BookService =new BookService()

    @Get('/')
    home():string
    {
        return `this will return all books `
    }
    //find all book
    @Get('/findAll')
    @UseGuards(new BookGuard())
    getAllBooks() : Book[]
    {
        return this.bookService.findAllBooks()
    }

    //update book
    @Put('/update')
    updateBook(@Body() book :Book): string
    {
        return this.bookService.updateBookService(book)
    }

    //delete book
    @Delete('/delete/:id')
    deleteBook(@Param('id' ,ParseIntPipe) bookId :string): string
    {
        console.log(bookId , typeof(bookId))
        return this.bookService.deleteBookService(bookId)
    }

    //Add book
    @Post('/add')
    addBook(@Body() book :Book): string
    {
        return this.bookService.addBookService(book)
    }
  
}