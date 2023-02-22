import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstPageRoutingModule } from './first-page-routing.module';
import { FirstPageComponent } from './first-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    FirstPageComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FirstPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class FirstPageModule { }
