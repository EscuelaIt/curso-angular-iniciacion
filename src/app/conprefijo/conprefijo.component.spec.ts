import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConprefijoComponent } from './conprefijo.component';

describe('ConprefijoComponent', () => {
  let component: ConprefijoComponent;
  let fixture: ComponentFixture<ConprefijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConprefijoComponent]
    });
    fixture = TestBed.createComponent(ConprefijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
