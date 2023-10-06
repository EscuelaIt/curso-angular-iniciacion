import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../books';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  books: Book[] = [];

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }
}
