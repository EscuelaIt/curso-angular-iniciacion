import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../books';

@Component({
  selector: 'app-boton-barato',
  template: ` <div>
    <h3>Podria ser barato</h3>
    <button *ngIf="price && price <= 10" (click)="notify.emit()">
      Soy Barato
    </button>
  </div>`,
  styles: [],
})
export class BotonBaratoComponent {
  @Input() price: number | undefined;
  @Output() notify = new EventEmitter();
}
