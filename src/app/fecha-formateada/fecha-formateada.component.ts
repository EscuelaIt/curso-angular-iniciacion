import { Component } from '@angular/core';

const DateFormats = {
  FULL_DATE: 'fullDate',
  SHORT_DATE: 'shortDate',
};

@Component({
  selector: 'app-fecha-formateada',
  templateUrl: './fecha-formateada.component.html',
  styleUrls: ['./fecha-formateada.component.css'],
})
export class FechaFormateadaComponent {
  format = DateFormats.FULL_DATE;
  fecha = new Date();
  menssage_async: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
      res('Mensaje devuelto');
    }, 1000);
  });

  changeFormat() {
    if (this.format === DateFormats.FULL_DATE) {
      this.format = DateFormats.SHORT_DATE;
    } else this.format = DateFormats.FULL_DATE;
  }
}
