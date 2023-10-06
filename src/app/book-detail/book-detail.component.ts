import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, books } from '../books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book: Book | undefined;
  count: number;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {
    this.count = 0;
  }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const bookId: Number = Number(routeParams.get('bookId'));
    this.book = books.find((book) => book.id === bookId);
  }

  addToCar() {
    if (!this?.book) throw new Error('No esta definido book');
    this.bookService.addToCar(this.book);
  }
}
