import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteParentComponent} from './route-parent/route-parent.component';
import {RouteChildOneComponent} from './route-child-one/route-child-one.component';
import {RouteChildTwoComponent} from './route-child-two/route-child-two.component';
import {RouteChildThreeComponent} from './route-child-three/route-child-three.component';


const routes: Routes = [
  {
    path: 'parentRoute',
    component: RouteParentComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            component: RouteChildOneComponent
          },
          {
            path: 'childOne',
            component: RouteChildOneComponent
          },
          {
            path: 'childTwo',
            component: RouteChildTwoComponent
          },
          {
            path: 'childThree',
            component: RouteChildThreeComponent
          },
          {
            path: '**',
            component: RouteChildOneComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
