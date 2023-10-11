import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailRangeComponent } from './book-detail-range.component';

describe('BookDetailRangeComponent', () => {
  let component: BookDetailRangeComponent;
  let fixture: ComponentFixture<BookDetailRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetailRangeComponent]
    });
    fixture = TestBed.createComponent(BookDetailRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
