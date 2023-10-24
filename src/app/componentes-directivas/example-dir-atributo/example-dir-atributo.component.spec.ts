import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDirAtributoComponent } from './example-dir-atributo.component';

describe('ExampleDirAtributoComponent', () => {
  let component: ExampleDirAtributoComponent;
  let fixture: ComponentFixture<ExampleDirAtributoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleDirAtributoComponent]
    });
    fixture = TestBed.createComponent(ExampleDirAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
