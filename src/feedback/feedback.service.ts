import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/common/logger.service';
@Injectable()
export class FeedbackService {
  constructor(private readonly loggerService: LoggerService) {}

  logFeedback(mail: string, content: string) {
    const message = `Feedback from ${mail}: "${content}"`;
    return this.loggerService.logWithTag('FEEDBACK', message);
  }
}
