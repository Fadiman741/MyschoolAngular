/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Physicalscienceforum12Component } from './physicalscienceforum12.component';

describe('Physicalscienceforum12Component', () => {
  let component: Physicalscienceforum12Component;
  let fixture: ComponentFixture<Physicalscienceforum12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Physicalscienceforum12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Physicalscienceforum12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
