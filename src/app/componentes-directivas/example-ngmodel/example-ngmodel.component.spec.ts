import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgmodelComponent } from './example-ngmodel.component';

describe('ExampleNgmodelComponent', () => {
  let component: ExampleNgmodelComponent;
  let fixture: ComponentFixture<ExampleNgmodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleNgmodelComponent]
    });
    fixture = TestBed.createComponent(ExampleNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
