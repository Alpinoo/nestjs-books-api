import { Module } from '@nestjs/common';
import { LoggerService } from './common/logger.service';
@Module({
  providers: [LoggerService],
  exports: [LoggerService],
})
export class CommonModule {}
