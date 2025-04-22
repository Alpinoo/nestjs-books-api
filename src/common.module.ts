import { Module } from '@nestjs/common';
import { LoggerService } from './common/logger.service';
import { MailService } from './common/mail.service';
@Module({
  providers: [LoggerService, MailService],
  exports: [LoggerService, MailService],
})
export class CommonModule {}
