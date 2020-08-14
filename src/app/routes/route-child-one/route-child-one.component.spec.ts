import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChildOneComponent } from './route-child-one.component';

describe('RouteChildOneComponent', () => {
  let component: RouteChildOneComponent;
  let fixture: ComponentFixture<RouteChildOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteChildOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
