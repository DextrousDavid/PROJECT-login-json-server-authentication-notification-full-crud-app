import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserComponent} from './view-user/view-user.component';
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  // { path: '', redirectTo: '/firstPage/first', pathMatch: 'full' },
  { path: 'firstPage', canActivate: [AuthGuard], loadChildren: () => import('./first-page/first-page.module').then(m => m.FirstPageModule) },
  { path: 'secondPage', canActivate: [AuthGuard], loadChildren: () => import('./second-page/second-page.module').then(m => m.SecondPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'view-user/:id', component: ViewUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }