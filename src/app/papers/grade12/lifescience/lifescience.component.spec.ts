/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LifescienceComponent } from './lifescience.component';

describe('LifescienceComponent', () => {
  let component: LifescienceComponent;
  let fixture: ComponentFixture<LifescienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifescienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifescienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
