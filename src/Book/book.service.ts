import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import {v4 as uuidv4} from 'uuid';
@Injectable()
export class BookService
{
    public books : Book[]= []

    //addbook
    addBookService(book : Book) :string
    {
        //generate id 
        book.id=uuidv4()
        this.books.push(book)
        return "Book has been successfully Added"
    }

    //update book
    updateBookService(book :Book):string
    {
        let index =this.books.findIndex((currentBook)=>{ // currentBook loop through whole book and find book id that we want to update 
            return currentBook.id==book.id
        })

        this.books[index]=book
        return `Book has successfully Upadted`
    }

    //delete book 

    deleteBookService(bookId : string):string
    {
        this.books=this.books.filter((book)=>{ //we loop and find the book that we want to delete.so we reinialize whole books object 
            return book.id !==bookId
        })

        return `Book is successfully deleted `
    }

    //find all books 
    findAllBooks():Book[]
    {
        return this.books
    }

}