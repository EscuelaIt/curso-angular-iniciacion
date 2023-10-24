import { Injectable } from '@angular/core';
import { DateTimeService } from './date-time.service';

@Injectable({
  providedIn: 'root',
})
export class DateTimeNewService extends DateTimeService {
  override getCurrentDate(): Date {
    console.log('Ejecutado DateTimeNewService');
    return new Date('2024/01/01');
  }
}
