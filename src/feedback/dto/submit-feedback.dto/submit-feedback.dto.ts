import { IsEmail, Length, IsNotEmpty } from 'class-validator';
export class SubmitFeedbackDto {
  @IsEmail()
  email: string;

  @Length(10)
  @IsNotEmpty()
  message: string;
}
