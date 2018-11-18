import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakebookComponent } from './fakebook.component';

describe('FakebookComponent', () => {
  let component: FakebookComponent;
  let fixture: ComponentFixture<FakebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
