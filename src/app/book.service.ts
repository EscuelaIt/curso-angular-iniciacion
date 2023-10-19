import { Injectable } from '@angular/core';
import { Book } from './books';
import { DateServiceService } from './services/date-service.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [];
  private bookedBook: { date: Date; book: Book }[] = [];

  constructor(private readonly dateServiceService: DateServiceService) {}

  addToCar(book: Book) {
    console.log('He agregado al carrito');
    this.books.push(book);
    this.bookedBook.push({
      book: book,
      date: this.dateServiceService.getCurrentTime(),
    });
  }

  getBooks(): Book[] {
    console.log(this.bookedBook);
    return this.books;
  }
}
