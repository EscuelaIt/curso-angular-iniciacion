import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-detail-range',
  templateUrl: './book-detail-range.component.html',
  styleUrls: ['./book-detail-range.component.css'],
})
export class BookDetailRangeComponent {
  @Input() inputRangeValue: number = 1;
  @Output() inputRangeValueChange = new EventEmitter<number>();

  decRange() {
    this.changeRangeValue(this.inputRangeValue - 1);
  }

  incRange() {
    this.changeRangeValue(this.inputRangeValue + 1);
  }

  onChangeInputRange(event: Event) {
    const target = event.target;
    const value = Number((target as HTMLInputElement).value);
    this.changeRangeValue(value);
  }

  private changeRangeValue(value: number) {
    this.inputRangeValue = value;
    this.inputRangeValueChange.emit(value);
  }
}
