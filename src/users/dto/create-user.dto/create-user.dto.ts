import { IsNotEmpty, IsEmail } from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;
}
