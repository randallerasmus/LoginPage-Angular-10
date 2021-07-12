import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthComponent} from './auth/auth.component';
import {AdminComponent} from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
