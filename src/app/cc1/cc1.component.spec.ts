import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cc1Component } from './cc1.component';

describe('Cc1Component', () => {
  let component: Cc1Component;
  let fixture: ComponentFixture<Cc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
