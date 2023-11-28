import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  completion_status: 'read' | 'in_progress';

  @Prop()
  rating: number;

  @Prop()
  notes: string[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
