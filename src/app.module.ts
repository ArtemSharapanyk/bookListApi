import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';

// AFhrfOa5SGbQ7RH1

@Module({
  imports: [
    BookModule,
    MongooseModule.forRoot(
      'mongodb+srv://artem:cAPOkow5P0Em8db4@cluster12.ntlibos.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
