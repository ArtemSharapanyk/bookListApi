import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BookService } from './book.service';

@Controller('/books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getAll(
    @Query('filters') filters: 'all' | 'read' | 'not_read_yet',
    @Query('rating') rating: number | undefined,
  ) {
    return this.bookService.getAll(filters, rating);
  }

  @Get(':id')
  getById(@Param('id') id) {
    return this.bookService.getById(id);
  }

  @Post()
  create(@Body() book: CreateBookDto) {
    return this.bookService.create(book);
  }

  @Patch(':id')
  edit(@Body() body: Partial<CreateBookDto>, @Param('id') id: string) {
    return this.bookService.edit(body, id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
