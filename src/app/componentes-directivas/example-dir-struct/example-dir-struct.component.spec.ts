import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDirStructComponent } from './example-dir-struct.component';

describe('ExampleDirStructComponent', () => {
  let component: ExampleDirStructComponent;
  let fixture: ComponentFixture<ExampleDirStructComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleDirStructComponent]
    });
    fixture = TestBed.createComponent(ExampleDirStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
