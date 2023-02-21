import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstPageRoutingModule } from './first-page-routing.module';
import { FirstPageComponent } from './first-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FirstPageComponent
  ],
  imports: [
    CommonModule,
    FirstPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class FirstPageModule { }
