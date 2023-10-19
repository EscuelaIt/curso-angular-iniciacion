import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-vars-child',
  templateUrl: './template-vars-child.component.html',
  styleUrls: ['./template-vars-child.component.css'],
})
export class TemplateVarsChildComponent {
  nombre = 'Soy hijo';

  @Input({ required: true, alias: 'texto' }) otroTexto!: string;

  mostrarMensaje() {
    alert('Me estoy mostrando desde mi padre');
  }
}
