import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { LoggerService } from 'src/common/logger.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService, LoggerService],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('creates a new book', () => {
    const title = 'Book of Boba Fett';
    const author = 'George Lucas';

    const result = service.createBook(title, author);

    expect(result).toBeDefined();
    expect(result.title).toBe(title);
    expect(result.author).toBe(author);
    expect(result.id).toBe(1);

    const allBooks = service.getAllBooks();

    expect(allBooks).toContainEqual(result);
  });

  it('are books really added?', () => {
    const allBooks = service.getAllBooks();

    expect(allBooks).toHaveLength(0);

    const booksToAdd = [
      {
        title: 'Booking',
        author: 'Someone',
      },
      {
        title: 'Cooking',
        author: 'Walter',
      },
    ];

    booksToAdd.forEach((book) => {
      service.createBook(book.title, book.author);
    });

    const newAllBooks = service.getAllBooks();

    expect(newAllBooks).toHaveLength(2);
  });

  it('logs book when book is created', () => {
    const spy = jest.spyOn(LoggerService.prototype, 'warn');

    service.createBook('titling', 'alpino');

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('A new book has been created');
  });
});
