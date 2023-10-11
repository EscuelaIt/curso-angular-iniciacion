import { Component } from '@angular/core';
import { Book, books } from '../books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  bookList: Book[] = books;
  currentDate: Date = new Date();

  constructor(private bookService: BookService) {}

  onNotify() {
    alert('Se ha presionado un boton');
  }

  addToCar(book: Book) {
    this.bookService.addToCar(book);
  }
}
