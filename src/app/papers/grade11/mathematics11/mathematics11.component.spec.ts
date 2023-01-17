/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mathematics11Component } from './mathematics11.component';

describe('Mathematics11Component', () => {
  let component: Mathematics11Component;
  let fixture: ComponentFixture<Mathematics11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mathematics11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mathematics11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
