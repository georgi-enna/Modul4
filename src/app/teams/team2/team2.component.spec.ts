/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Team2Component } from './team2.component';

describe('Team2Component', () => {
  let component: Team2Component;
  let fixture: ComponentFixture<Team2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Team2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Team2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
