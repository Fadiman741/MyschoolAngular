/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mathematicsforum11Component } from './mathematicsforum11.component';

describe('Mathematicsforum11Component', () => {
  let component: Mathematicsforum11Component;
  let fixture: ComponentFixture<Mathematicsforum11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mathematicsforum11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mathematicsforum11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
