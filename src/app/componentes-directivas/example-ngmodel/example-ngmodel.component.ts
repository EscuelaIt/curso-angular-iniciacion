import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-example-ngmodel',
  templateUrl: './example-ngmodel.component.html',
  styleUrls: ['./example-ngmodel.component.css'],
})
export class ExampleNgmodelComponent {
  nombre = 'Mi nombre';
  email = 'miemail@aaa.ee';

  enviarFormulario(miFormulario: NgForm) {
    console.log(miFormulario.form.value);
  }
}
