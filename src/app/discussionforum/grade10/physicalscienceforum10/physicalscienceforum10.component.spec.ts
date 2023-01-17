/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Physicalscienceforum10Component } from './physicalscienceforum10.component';

describe('Physicalscienceforum10Component', () => {
  let component: Physicalscienceforum10Component;
  let fixture: ComponentFixture<Physicalscienceforum10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Physicalscienceforum10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Physicalscienceforum10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
