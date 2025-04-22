import { Controller, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('welcome')
  sendWelcomeMail(@Body() createUserDto: CreateUserDto): string {
    const { name, email } = createUserDto;
    this.usersService.sendWelcomeMail(email);
    return `Welcome email sent to ${name} <${email}>`;
  }
}
