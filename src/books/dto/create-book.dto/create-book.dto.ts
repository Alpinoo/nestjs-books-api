import { IsString, Length } from 'class-validator';
export class CreateBookDto {
  @IsString()
  @Length(2, 100)
  title: string;

  @IsString()
  @Length(2, 50)
  author: string;
}
