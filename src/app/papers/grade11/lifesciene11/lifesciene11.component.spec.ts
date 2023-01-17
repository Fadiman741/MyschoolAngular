/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lifesciene11Component } from './lifesciene11.component';

describe('Lifesciene11Component', () => {
  let component: Lifesciene11Component;
  let fixture: ComponentFixture<Lifesciene11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifesciene11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifesciene11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
