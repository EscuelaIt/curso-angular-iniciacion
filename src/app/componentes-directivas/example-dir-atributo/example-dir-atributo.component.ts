import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example-dir-atributo',
  templateUrl: './example-dir-atributo.component.html',
  styleUrls: ['./example-dir-atributo.component.css'],
})
export class ExampleDirAtributoComponent implements OnInit {
  isValid = false;

  styleClassList: Record<string, boolean> = {
    principal: true,
    'con-fondo': true,
    'con-borde': true,
  };

  styleList: Record<string, string> = {};

  constructor() {}

  ngOnInit(): void {
    this.setStyleClass();
    this.setStyles();
  }

  setStyleClass() {
    this.styleClassList = {
      principal: false,
      'con-fondo': true,
      'con-borde': false,
    };
  }

  setStyles() {
    this.styleList = {
      'font-size': 'large',
      'background-color': 'aqua',
    };
  }
}
