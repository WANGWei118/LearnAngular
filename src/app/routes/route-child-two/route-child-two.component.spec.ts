import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChildTwoComponent } from './route-child-two.component';

describe('RouteChildTwoComponent', () => {
  let component: RouteChildTwoComponent;
  let fixture: ComponentFixture<RouteChildTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteChildTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
