import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DacComponent } from './dac.component';

describe('DacComponent', () => {
  let component: DacComponent;
  let fixture: ComponentFixture<DacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
