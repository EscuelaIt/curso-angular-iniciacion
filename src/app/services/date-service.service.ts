import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateServiceService {
  constructor() {}

  getCurrentTime() {
    return new Date();
  }
}
