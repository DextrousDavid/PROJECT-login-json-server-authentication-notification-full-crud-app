import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'first', component: FirstPageComponent },
  { path: 'edit', component: EditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstPageRoutingModule { }
