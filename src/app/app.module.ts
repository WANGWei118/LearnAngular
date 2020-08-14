import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import {NzButtonModule} from 'ng-zorro-antd';
import { HighlightDirective } from './directive/highlight.directive';

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
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NzButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
