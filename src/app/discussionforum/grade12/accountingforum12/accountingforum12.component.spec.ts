/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Accountingforum12Component } from './accountingforum12.component';

describe('Accountingforum12Component', () => {
  let component: Accountingforum12Component;
  let fixture: ComponentFixture<Accountingforum12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accountingforum12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accountingforum12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
