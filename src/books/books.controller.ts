import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService, Book } from './books.service';
import { CreateBookDto } from './dto/create-book.dto/create-book.dto';
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Book {
    const { title, author } = createBookDto;
    return this.booksService.createBook(title, author);
  }
}
