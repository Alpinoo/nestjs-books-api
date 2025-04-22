import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  sendMail(to: string, subject: string) {
    console.log(`📧 Mail sent to ${to} with subject "${subject}"`);
  }
}
