/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lifescienceforum10Component } from './lifescienceforum10.component';

describe('Lifescienceforum10Component', () => {
  let component: Lifescienceforum10Component;
  let fixture: ComponentFixture<Lifescienceforum10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifescienceforum10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifescienceforum10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
