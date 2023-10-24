import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-short-time',
  template: `{{ currentDate | date : 'shortTime' }}`,
  styles: [],
})
export class ShortTimeComponent {
  @Input({ alias: 'currentDate', required: true }) currentDate!: Date;
}
