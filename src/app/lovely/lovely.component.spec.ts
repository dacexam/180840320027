import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovelyComponent } from './lovely.component';

describe('LovelyComponent', () => {
  let component: LovelyComponent;
  let fixture: ComponentFixture<LovelyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovelyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
