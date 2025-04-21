import { Injectable } from '@nestjs/common';

export interface Book {
  id: number;
  title: string;
  author: string;
}
@Injectable()
export class BooksService {
  private books: Book[] = [];

  //GET books
  getAllBooks(): Book[] {
    return this.books;
  }

  createBook(title: string, author: string) {
    const newBook: Book = {
      id: this.books.length + 1,
      title,
      author,
    };

    this.books.push(newBook);

    return newBook;
  }
}
