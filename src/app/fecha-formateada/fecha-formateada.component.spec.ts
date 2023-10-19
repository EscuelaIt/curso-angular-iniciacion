import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaFormateadaComponent } from './fecha-formateada.component';

describe('FechaFormateadaComponent', () => {
  let component: FechaFormateadaComponent;
  let fixture: ComponentFixture<FechaFormateadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FechaFormateadaComponent]
    });
    fixture = TestBed.createComponent(FechaFormateadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
