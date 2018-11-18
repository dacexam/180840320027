import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DacbookComponent } from './dacbook.component';

describe('DacbookComponent', () => {
  let component: DacbookComponent;
  let fixture: ComponentFixture<DacbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DacbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DacbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
