import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './input-output/parent/parent.component';
import { ChildOneComponent } from './sub-pub/child-one/child-one.component';
import { ChildTwoComponent } from './sub-pub/child-two/child-two.component';
import { ChildThreeComponent } from './sub-pub/child-three/child-three.component';
import { ChildFourComponent } from './sub-pub/child-four/child-four.component';
import { ChildComponent } from './input-output/child/child.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import {RouterModule} from '@angular/router';
import {NzButtonModule, NzInputModule} from 'ng-zorro-antd';
import { HighlightDirective } from './directive/highlight.directive';
import { NgModelComponent } from './ng-model/ng-model.component';
import {FormsModule} from '@angular/forms';
import {ParentCommonModule} from './routes/parent.module';
import {RouteParentComponent} from './routes/route-parent/route-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    ChildFourComponent,
    ChildComponent,
    HomepageComponent,
    SubscribeComponent,
    HighlightDirective,
    NgModelComponent,
    RouteParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NzButtonModule,
    NzInputModule,
    FormsModule,
    ParentCommonModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
