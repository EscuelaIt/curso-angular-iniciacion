import { Component } from '@angular/core';

@Component({
  selector: 'app-dir-personalizadas',
  templateUrl: './dir-personalizadas.component.html',
  styleUrls: ['./dir-personalizadas.component.css'],
})
export class DirPersonalizadasComponent {
  mostrarMensaje() {
    alert('Lanzado Doble click');
  }
}
