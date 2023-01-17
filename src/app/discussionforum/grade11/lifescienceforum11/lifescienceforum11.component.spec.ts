/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lifescienceforum11Component } from './lifescienceforum11.component';

describe('Lifescienceforum11Component', () => {
  let component: Lifescienceforum11Component;
  let fixture: ComponentFixture<Lifescienceforum11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifescienceforum11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifescienceforum11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
