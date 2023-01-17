/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Physicalscience10Component } from './physicalscience10.component';

describe('Physicalscience10Component', () => {
  let component: Physicalscience10Component;
  let fixture: ComponentFixture<Physicalscience10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Physicalscience10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Physicalscience10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
