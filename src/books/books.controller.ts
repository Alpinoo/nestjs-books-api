import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService, Book } from './books.service';
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Post()
  createBook(
    @Body('title') title: string,
    @Body('author') author: string,
  ): Book {
    return this.booksService.createBook(title, author);
  }
}
