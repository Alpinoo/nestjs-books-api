import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { LoggerService } from './common/logger.service';
import { CommonModule } from './common.module';
import { UsersModule } from './users/users.module';
import { FeedbackModule } from './feedback.module';

@Module({
  imports: [BooksModule, CommonModule, UsersModule, FeedbackModule],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
