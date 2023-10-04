import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../books';

@Component({
  selector: 'app-boton-barato',
  template: `<button *ngIf="price && price <= 10" (click)="notify.emit()">
    Barato
  </button>`,
  styles: [],
})
export class BotonBaratoComponent {
  @Input() price: number | undefined;
  @Output() notify = new EventEmitter();
}
