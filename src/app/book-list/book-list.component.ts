import { Component } from '@angular/core';
import { Book, books } from '../books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  bookList: Book[] = books;

  onNotify() {
    alert('Se ha presionado un boton');
  }
}
