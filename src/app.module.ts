import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { LoggerService } from './common/logger.service';
import { CommonModule } from './common.module';

@Module({
  imports: [BooksModule, CommonModule],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
