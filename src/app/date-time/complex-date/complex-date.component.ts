import { Component, inject } from '@angular/core';
import { DateTimeService } from '../date-time.service';

@Component({
  selector: 'app-complex-date',
  template: `
    <p>
      {{ currentDate | date : 'shortDate' }}
      <app-short-time [currentDate]="currentDate" />
    </p>
    <p>
      <app-copyrigth />
    </p>
  `,
  styles: [],
})
export class ComplexDateComponent {
  currentDate = new Date();
  private readonly dateTimeService: DateTimeService = inject(DateTimeService);

  constructor() {
    this.currentDate = this.dateTimeService.getCurrentDate();
  }
}
