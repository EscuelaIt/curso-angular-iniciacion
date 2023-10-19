import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVarsComponent } from './template-vars.component';

describe('TemplateVarsComponent', () => {
  let component: TemplateVarsComponent;
  let fixture: ComponentFixture<TemplateVarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateVarsComponent]
    });
    fixture = TestBed.createComponent(TemplateVarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
