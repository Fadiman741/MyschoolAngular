/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mathematics10Component } from './mathematics10.component';

describe('Mathematics10Component', () => {
  let component: Mathematics10Component;
  let fixture: ComponentFixture<Mathematics10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mathematics10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mathematics10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
