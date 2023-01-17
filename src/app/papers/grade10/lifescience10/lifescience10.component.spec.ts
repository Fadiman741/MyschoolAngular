/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lifescience10Component } from './lifescience10.component';

describe('Lifescience10Component', () => {
  let component: Lifescience10Component;
  let fixture: ComponentFixture<Lifescience10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifescience10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifescience10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
