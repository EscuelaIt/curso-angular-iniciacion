import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseBaratoComponent } from './switch-case-barato.component';

describe('SwitchCaseBaratoComponent', () => {
  let component: SwitchCaseBaratoComponent;
  let fixture: ComponentFixture<SwitchCaseBaratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchCaseBaratoComponent]
    });
    fixture = TestBed.createComponent(SwitchCaseBaratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
