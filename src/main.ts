import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { CopyrigthComponent } from './app/my-standalone-components/copyrigth/copyrigth.component';
import { DateTimeService } from './app/date-time/date-time.service';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// bootstrapApplication(CopyrigthComponent, {
//   providers: [DateTimeService],
// });
