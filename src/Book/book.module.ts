import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookMiddleWare } from './book.middleware';


@Module({
  imports: [],
  controllers: [BookController],  // ✅ Register Controller
  providers: [BookService],       // ✅ Register Service
  exports:[]
})
export class BookModule implements NestModule{

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleWare).forRoutes('book')
  }

  constructor() {
    console.log("Book Module");
  }
}
