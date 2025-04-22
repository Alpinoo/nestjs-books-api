import { Injectable } from '@nestjs/common';
import { MailService } from 'src/common/mail.service';

@Injectable()
export class UsersService {
  constructor(private readonly mailService: MailService) {}

  sendWelcomeMail(userMail: string) {
    this.mailService.sendMail(userMail, 'Hello there');
  }
}
