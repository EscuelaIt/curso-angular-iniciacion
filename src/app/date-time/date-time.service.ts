import { Injectable } from '@angular/core';

@Injectable()
export class DateTimeService {
  constructor() {}

  getCurrentDate(): Date {
    console.log('Ejecutado DateTimeService');
    return new Date();
  }
}
