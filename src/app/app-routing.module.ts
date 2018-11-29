import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './feed/feed.component';
import {VitrinaComponent} from './vitrina/vitrina.component';

const routes: Routes = [
  { path: '', component: FeedComponent},
  { path: 'joyeria', component: VitrinaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
