import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemes/book.schema';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async getAll(
    filters: 'all' | 'read' | 'not_read_yet',
    rating: number | undefined,
  ) {
    if (filters === 'all') {
      const books = await this.bookModel.find(rating ? { rating } : {}).exec();

      return books;
    }

    if (filters === 'read') {
      const books = await this.bookModel.find(
        rating
          ? { rating, completion_status: 'read' }
          : { completion_status: 'read' },
      );

      return books;
    }

    if (filters === 'not_read_yet') {
      const books = await this.bookModel.find(
        rating
          ? { rating, completion_status: 'in_progress' }
          : {
              completion_status: 'in_progress',
            },
      );

      return books;
    }
  }
  async getById(id: string) {
    const book = await this.bookModel.findById(id);

    return book;
  }
  async create(book: CreateBookDto) {
    const newBook = await this.bookModel.create(book);

    return newBook;
  }
  async edit(changedProperties: Partial<CreateBookDto>, id: string) {
    const changedBook = await this.bookModel.findByIdAndUpdate(
      { _id: id },
      changedProperties,
    );

    return changedBook;
  }
  async delete(id: string) {
    const deleteBook = await this.bookModel.findOneAndDelete({ _id: id });

    return deleteBook._id;
  }
}
