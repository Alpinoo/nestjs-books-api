import { Injectable } from '@nestjs/common';
import { LoggerService } from '../common/logger.service';
export interface Book {
  id: number;
  title: string;
  author: string;
}
@Injectable()
export class BooksService {
  constructor(private readonly logger: LoggerService) {}
  private books: Book[] = [];

  //GET books
  getAllBooks(): Book[] {
    this.logger.log('All books fetched');
    return this.books;
  }

  createBook(title: string, author: string) {
    const newBook: Book = {
      id: this.books.length + 1,
      title,
      author,
    };

    this.logger.warn('A new book has been created');

    this.books.push(newBook);

    return newBook;
  }
}
