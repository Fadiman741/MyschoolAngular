/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Grade11Component } from './grade11.component';

describe('Grade11Component', () => {
  let component: Grade11Component;
  let fixture: ComponentFixture<Grade11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grade11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
