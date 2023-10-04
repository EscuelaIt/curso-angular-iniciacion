import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, books } from '../books';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book: Book | undefined;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const bookId: Number = Number(routeParams.get('bookId'));
    this.book = books.find((book) => book.id === bookId);
  }
}
