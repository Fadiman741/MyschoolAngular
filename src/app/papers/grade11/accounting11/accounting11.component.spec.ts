/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Accounting11Component } from './accounting11.component';

describe('Accounting11Component', () => {
  let component: Accounting11Component;
  let fixture: ComponentFixture<Accounting11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accounting11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accounting11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
