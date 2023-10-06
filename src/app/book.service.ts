import { Injectable } from '@angular/core';
import { Book } from './books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [];
  constructor() {}

  addToCar(book: Book) {
    console.log('He agregado al carrito');
    this.books.push(book);
  }

  getBooks(): Book[] {
    return this.books;
  }
}
