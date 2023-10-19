import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentProjectionsComponent } from './component-projections.component';

describe('ComponentProjectionsComponent', () => {
  let component: ComponentProjectionsComponent;
  let fixture: ComponentFixture<ComponentProjectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentProjectionsComponent]
    });
    fixture = TestBed.createComponent(ComponentProjectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
