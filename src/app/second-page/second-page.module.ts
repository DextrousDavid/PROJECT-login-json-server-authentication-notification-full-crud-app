import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondPageRoutingModule } from './second-page-routing.module';
import { SecondPageComponent } from './second-page.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SecondPageComponent,
    AssignmentComponent
  ],
  imports: [
    CommonModule,
    SecondPageRoutingModule,
    HttpClientModule
  ]
})
export class SecondPageModule { }
