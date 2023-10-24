import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-other-dir-atributo',
  templateUrl: './other-dir-atributo.component.html',
  styleUrls: ['./other-dir-atributo.component.css'],
})
export class OtherDirAtributoComponent {
  @Input({ required: true }) isValid!: boolean;

  styleClassList: Record<string, boolean> = {};

  ngOnInit(): void {
    this.setStyleClass();
  }

  setStyleClass() {
    this.styleClassList = {
      principal: this.isValid,
      'con-fondo': !this.isValid,
      'con-borde': this.isValid,
    };
  }
}
