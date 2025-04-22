import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { CommonModule } from 'src/common.module';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [CommonModule],
})
export class BooksModule {}
