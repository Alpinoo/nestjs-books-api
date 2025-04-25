import { Controller, Body, Post } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { SubmitFeedbackDto } from './dto/submit-feedback.dto/submit-feedback.dto';
@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post('')
  getFeedback(@Body() submitFeedbackDto: SubmitFeedbackDto) {
    const { email, message } = submitFeedbackDto;

    return this.feedbackService.logFeedback(email, message);
  }
}
