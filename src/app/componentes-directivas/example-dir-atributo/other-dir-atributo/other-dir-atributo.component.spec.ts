import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDirAtributoComponent } from './other-dir-atributo.component';

describe('OtherDirAtributoComponent', () => {
  let component: OtherDirAtributoComponent;
  let fixture: ComponentFixture<OtherDirAtributoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherDirAtributoComponent]
    });
    fixture = TestBed.createComponent(OtherDirAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
