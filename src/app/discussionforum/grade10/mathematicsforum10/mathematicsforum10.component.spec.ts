/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mathematicsforum10Component } from './mathematicsforum10.component';

describe('Mathematicsforum10Component', () => {
  let component: Mathematicsforum10Component;
  let fixture: ComponentFixture<Mathematicsforum10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mathematicsforum10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mathematicsforum10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
