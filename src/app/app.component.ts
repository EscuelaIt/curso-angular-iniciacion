import { Component } from '@angular/core';
import { pruebaObservable } from './observables/example-observable';
import { RickyMortyService } from './ricky-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'books';

  constructor(private readonly rickyMortyService: RickyMortyService) {
    this.testObservable();
    this.rickyMortyService.getData();
  }

  testObservable() {
    pruebaObservable();
  }
}

// ngClass, ngStyle, ngModel
