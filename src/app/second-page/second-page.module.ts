import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondPageRoutingModule } from './second-page-routing.module';
import { SecondPageComponent } from './second-page.component';
import { AssignmentComponent } from './assignment/assignment.component';


@NgModule({
  declarations: [
    SecondPageComponent,
    AssignmentComponent
  ],
  imports: [
    CommonModule,
    SecondPageRoutingModule
  ]
})
export class SecondPageModule { }
