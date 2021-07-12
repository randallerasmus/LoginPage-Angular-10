import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login/login.component';
import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'auth', component: AuthComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
