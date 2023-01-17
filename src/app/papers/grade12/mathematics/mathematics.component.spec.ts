/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MathematicsComponent } from './mathematics.component';

describe('MathematicsComponent', () => {
  let component: MathematicsComponent;
  let fixture: ComponentFixture<MathematicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathematicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
