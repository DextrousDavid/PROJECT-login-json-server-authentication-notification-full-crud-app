import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/firstPage/first', pathMatch: 'full' },
  { path: 'firstPage', loadChildren: () => import('./first-page/first-page.module').then(m => m.FirstPageModule) }, { path: 'secondPage', loadChildren: () => import('./second-page/second-page.module').then(m => m.SecondPageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
