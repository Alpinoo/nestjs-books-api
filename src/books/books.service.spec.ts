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
});
