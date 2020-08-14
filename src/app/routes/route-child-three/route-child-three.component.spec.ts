import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChildThreeComponent } from './route-child-three.component';

describe('RouteChildThreeComponent', () => {
  let component: RouteChildThreeComponent;
  let fixture: ComponentFixture<RouteChildThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteChildThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteChildThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
