import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortTimeComponent } from './short-time/short-time.component';
import { ComplexDateComponent } from './complex-date/complex-date.component';
import { DateTimeService } from './date-time.service';
import { DateTimeNewService } from './date-time-new.service';
import { AppConfig } from './app.config';
import { CopyrigthComponent } from '../my-standalone-components/copyrigth/copyrigth.component';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const API_ENDPOINTS: AppConfig = {
  apiEndpoint: '/mi_endpoint',
  title: 'mi_endpoint',
};

@NgModule({
  declarations: [ShortTimeComponent, ComplexDateComponent],
  imports: [CommonModule, CopyrigthComponent],
  exports: [ComplexDateComponent],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: API_ENDPOINTS,
    },
    //{ provide: DateTimeService, useExisting: DateTimeNewService },
    { provide: DateTimeService, useClass: DateTimeNewService },
  ],
})
export class DateTimeModule {}
