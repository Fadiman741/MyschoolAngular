/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Accountingforum11Component } from './accountingforum11.component';

describe('Accountingforum11Component', () => {
  let component: Accountingforum11Component;
  let fixture: ComponentFixture<Accountingforum11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accountingforum11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accountingforum11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
