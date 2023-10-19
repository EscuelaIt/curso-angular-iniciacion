import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TemplateVarsChildComponent } from './template-vars-child/template-vars-child.component';

@Component({
  selector: 'app-template-vars',
  templateUrl: './template-vars.component.html',
  styleUrls: ['./template-vars.component.css'],
})
export class TemplateVarsComponent {
  canShow = true;
  public miPropiedadPrivada = true;

  @ViewChild(TemplateVarsChildComponent)
  templateVarsChildComponent!: TemplateVarsChildComponent;

  mostrarNombre(nombre: string) {
    this.templateVarsChildComponent.mostrarMensaje();
  }

  onSubmit(myForm: NgForm) {
    throw new Error('Method not implemented.');
  }
}
