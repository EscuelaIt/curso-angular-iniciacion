import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  interpolacionText = 'TextoOriginal';
  fechaDeHoy = new Date();
  miTextoH3 = 'Soy H3';
  urlImage = '';
  autorClass = 'NombreAutorBlue';
  descripcionModificada = 'texto original';

  private urlIconoRojo =
    'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg';
  private urlIconoAzul =
    'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-bleu.png';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {
    this.count = 0;
    this.urlImage = this.urlIconoRojo;
  }

  cambiarTexto() {
    if (this.interpolacionText === 'TextoOriginal') {
      this.interpolacionText = 'TextoModificado';
      this.autorClass = 'NombreAutorRed';
    } else {
      this.interpolacionText = 'TextoOriginal';
      this.autorClass = 'NombreAutorBlue';
    }
  }

  isDisabled() {
    return this.isTextoOriginal();
  }

  isTextoOriginal() {
    return this.interpolacionText === 'TextoOriginal';
  }

  cambiarIcono() {
    if (this.urlImage === this.urlIconoRojo) {
      this.urlImage = this.urlIconoAzul;
    } else this.urlImage = this.urlIconoRojo;
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
