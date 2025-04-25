import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { TagsService } from './tags.service';
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  createTag(@Body() createTagDto: CreateTagDto): string {
    const { name } = createTagDto;
    return this.tagsService.createTag(name);
  }
}
