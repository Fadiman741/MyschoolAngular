/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Accountingforum10Component } from './accountingforum10.component';

describe('Accountingforum10Component', () => {
  let component: Accountingforum10Component;
  let fixture: ComponentFixture<Accountingforum10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accountingforum10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accountingforum10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
