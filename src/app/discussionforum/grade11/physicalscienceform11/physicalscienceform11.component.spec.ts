/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Physicalscienceform11Component } from './physicalscienceform11.component';

describe('Physicalscienceform11Component', () => {
  let component: Physicalscienceform11Component;
  let fixture: ComponentFixture<Physicalscienceform11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Physicalscienceform11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Physicalscienceform11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
