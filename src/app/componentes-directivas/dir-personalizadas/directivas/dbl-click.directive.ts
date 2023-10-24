import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDblClick]',
})
export class DblClickDirective {
  @Output() appDblClickEvent = new EventEmitter();

  constructor() {}

  @HostListener('dblclick') onDoubleClick() {
    this.appDblClickEvent.emit();
  }
}
