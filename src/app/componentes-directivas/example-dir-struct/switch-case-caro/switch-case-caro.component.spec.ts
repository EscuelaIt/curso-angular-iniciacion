import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseCaroComponent } from './switch-case-caro.component';

describe('SwitchCaseCaroComponent', () => {
  let component: SwitchCaseCaroComponent;
  let fixture: ComponentFixture<SwitchCaseCaroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchCaseCaroComponent]
    });
    fixture = TestBed.createComponent(SwitchCaseCaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
