import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVarsChildComponent } from './template-vars-child.component';

describe('TemplateVarsChildComponent', () => {
  let component: TemplateVarsChildComponent;
  let fixture: ComponentFixture<TemplateVarsChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateVarsChildComponent]
    });
    fixture = TestBed.createComponent(TemplateVarsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
