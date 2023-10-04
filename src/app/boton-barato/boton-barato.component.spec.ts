import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonBaratoComponent } from './boton-barato.component';

describe('BotonBaratoComponent', () => {
  let component: BotonBaratoComponent;
  let fixture: ComponentFixture<BotonBaratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonBaratoComponent]
    });
    fixture = TestBed.createComponent(BotonBaratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
