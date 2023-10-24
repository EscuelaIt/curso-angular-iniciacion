import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirPersonalizadasComponent } from './dir-personalizadas.component';

describe('DirPersonalizadasComponent', () => {
  let component: DirPersonalizadasComponent;
  let fixture: ComponentFixture<DirPersonalizadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirPersonalizadasComponent]
    });
    fixture = TestBed.createComponent(DirPersonalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
