import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Header11Component } from './header11.component';

describe('Header11Component', () => {
  let component: Header11Component;
  let fixture: ComponentFixture<Header11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Header11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Header11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
