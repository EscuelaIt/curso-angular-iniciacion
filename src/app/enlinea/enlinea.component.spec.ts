import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlineaComponent } from './enlinea.component';

describe('EnlineaComponent', () => {
  let component: EnlineaComponent;
  let fixture: ComponentFixture<EnlineaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnlineaComponent]
    });
    fixture = TestBed.createComponent(EnlineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
