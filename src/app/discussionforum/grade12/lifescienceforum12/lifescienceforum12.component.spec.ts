/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lifescienceforum12Component } from './lifescienceforum12.component';

describe('Lifescienceforum12Component', () => {
  let component: Lifescienceforum12Component;
  let fixture: ComponentFixture<Lifescienceforum12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifescienceforum12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifescienceforum12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
