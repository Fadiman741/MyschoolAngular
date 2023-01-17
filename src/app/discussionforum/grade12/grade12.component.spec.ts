/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Grade12Component } from './grade12.component';

describe('Grade12Component', () => {
  let component: Grade12Component;
  let fixture: ComponentFixture<Grade12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grade12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
