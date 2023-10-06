import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-soy-manual',
  template: `<p class="myclass">SoyManualComponent works!!</p>`,
  styles: [
    `
      .myclass {
        color: #000;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SoyManualComponent implements OnChanges, OnInit, OnDestroy {
  constructor() {
    console.log('Construyendome');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('Me he iniciado');
  }

  ngOnDestroy(): void {
    console.log('me he destruido');
  }
}
