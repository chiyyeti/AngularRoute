import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisiterRoutingModule } from './visiter-routing.module';
import { VisiterComponent } from './visiter.component';


@NgModule({
  declarations: [VisiterComponent],
  imports: [
    CommonModule,
    VisiterRoutingModule
  ]
})
export class VisiterModule { }
