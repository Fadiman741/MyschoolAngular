/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Physicalscience11Component } from './physicalscience11.component';

describe('Physicalscience11Component', () => {
  let component: Physicalscience11Component;
  let fixture: ComponentFixture<Physicalscience11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Physicalscience11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Physicalscience11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
