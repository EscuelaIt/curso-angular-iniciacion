import { Observable, of, pipe, map, filter } from 'rxjs';

export function pruebaObservable() {
  const myObservable: Observable<number> = of(1, 2, 3).pipe(
    map((value) => value * 5),
    filter((value) => value % 2 == 0)
  );

  let valor: number = 0;
  const valor$ = myObservable.subscribe({
    next: (x: number) => {
      valor = x;
      console.log(x);
    },
    error: (err: Error) => {
      console.error(err);
    },
    complete: () => {
      console.log('completado');
    },
  });

  myObservable.subscribe({
    next: (x: number) => {
      console.log(x + 1);
    },
    error: (err: Error) => {
      console.error(err);
    },
    complete: () => {
      console.log('completado');
    },
  });

  myObservable.subscribe({
    next: (x: number) => {
      console.log(x * 3);
    },
    error: (err: Error) => {
      console.error(err);
    },
    complete: () => {
      console.log('completado');
    },
  });

  setTimeout(() => {
    valor$.unsubscribe();
  }, 1000);
}
