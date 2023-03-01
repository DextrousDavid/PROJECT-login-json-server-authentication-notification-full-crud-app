import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewUserComponent} from './view-user/view-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
  // { path: '', redirectTo: '/firstPage/first', pathMatch: 'full' },
  { path: 'firstPage', loadChildren: () => import('./first-page/first-page.module').then(m => m.FirstPageModule) },
  { path: 'secondPage', loadChildren: () => import('./second-page/second-page.module').then(m => m.SecondPageModule) },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'view-user/:id', component: ViewUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
