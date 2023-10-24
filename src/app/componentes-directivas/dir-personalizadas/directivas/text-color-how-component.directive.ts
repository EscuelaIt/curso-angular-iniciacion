import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appTextColorHowComponent]',
})
export class TextColorHowComponentDirective implements OnChanges {
  @Input() appTextColorHowComponent!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'color',
      this.appTextColorHowComponent
    );
  }
}
