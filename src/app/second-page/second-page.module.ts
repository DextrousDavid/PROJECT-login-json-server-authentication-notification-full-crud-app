import { NgxPaginationModule } from 'ngx-pagination';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SecondPageRoutingModule } from './second-page-routing.module';
import { SecondPageComponent } from './second-page.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';




@NgModule({
  declarations: [
    SecondPageComponent,
    AssignmentComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    SecondPageRoutingModule,
    HttpClientModule,
    FormsModule
  ],
})
export class SecondPageModule { }
