import { NgModule } from '@angular/core';
import {HomepageComponent} from './homepage/homepage.component';
import {ParentComponent} from './input-output/parent/parent.component';
import {RouterModule, Routes} from '@angular/router';
import {SubscribeComponent} from './subscribe/subscribe.component';

const routes: Routes = [
  { path: '',  component: HomepageComponent, pathMatch: 'full' },
  { path: 'input', component: ParentComponent },
  { path: 'sub', component: SubscribeComponent },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
