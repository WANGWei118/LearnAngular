import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouteChildOneComponent} from './route-child-one/route-child-one.component';
import {RouteChildTwoComponent} from './route-child-two/route-child-two.component';
import {RouteChildThreeComponent} from './route-child-three/route-child-three.component';
import {ParentRoutingModule} from './parent-routing.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    RouteChildOneComponent,
    RouteChildTwoComponent,
    RouteChildThreeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ParentRoutingModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ParentCommonModule {}
