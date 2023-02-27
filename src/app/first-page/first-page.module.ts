import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstPageRoutingModule } from './first-page-routing.module';
import { FirstPageComponent } from './first-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FirstPageComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FirstPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FirstPageModule { }
