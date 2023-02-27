import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondPageComponent } from './second-page.component';
import { AssignmentComponent } from './assignment/assignment.component';

const routes: Routes = [
  { path: 'second', component: SecondPageComponent },
  { path: 'assignment', component: AssignmentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondPageRoutingModule { }
