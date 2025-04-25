import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { LoggerService } from './common/logger.service';
import { CommonModule } from './common.module';
import { UsersModule } from './users/users.module';
import { FeedbackModule } from './feedback/feedback.module';
import { FeedbackController } from './feedback/feedback.controller';
import { FeedbackService } from './feedback/feedback.service';

@Module({
  imports: [BooksModule, CommonModule, UsersModule, FeedbackModule],
  controllers: [AppController, FeedbackController],
  providers: [AppService, LoggerService, FeedbackService],
})
export class AppModule {}
