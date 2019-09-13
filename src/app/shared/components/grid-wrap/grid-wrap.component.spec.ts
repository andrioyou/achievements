import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridWrapComponent } from './grid-wrap.component';

describe('GridWrapComponent', () => {
  let component: GridWrapComponent;
  let fixture: ComponentFixture<GridWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridWrapComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
