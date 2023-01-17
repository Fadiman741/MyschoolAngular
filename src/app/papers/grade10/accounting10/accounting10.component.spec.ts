/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Accounting10Component } from './accounting10.component';

describe('Accounting10Component', () => {
  let component: Accounting10Component;
  let fixture: ComponentFixture<Accounting10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accounting10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accounting10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
