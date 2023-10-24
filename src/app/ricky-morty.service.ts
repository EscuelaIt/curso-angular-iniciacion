import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, pipe, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickyMortyService {
  datos: any;

  constructor(private readonly httpClient: HttpClient) {}

  getData() {
    const data: Observable<Response> = from(
      fetch('https://rickandmortyapi.com/api/character')
    );

    data.subscribe((valor) => {
      console.log(valor);
    });

    const httpClientRequest$ = this.httpClient
      .get<any>('https://rickandmortyapi.com/api/character')
      .pipe(retry(4));

    httpClientRequest$.subscribe((res) => {
      console.log(res);
      this.datos = res;
    });
  }
}
