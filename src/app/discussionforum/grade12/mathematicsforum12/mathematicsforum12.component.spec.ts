/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mathematicsforum12Component } from './mathematicsforum12.component';

describe('Mathematicsforum12Component', () => {
  let component: Mathematicsforum12Component;
  let fixture: ComponentFixture<Mathematicsforum12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mathematicsforum12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mathematicsforum12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
