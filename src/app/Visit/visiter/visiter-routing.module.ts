import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisiterComponent } from './visiter.component';

const routes: Routes = [{ path: '', component: VisiterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisiterRoutingModule { }
