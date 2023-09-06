import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthLayoutComponent} from "../../layouts/auth-layout/auth-layout.component";
import {LoginPageComponent} from "./pages/login/login-page.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [AuthLayoutComponent, LoginPageComponent, LoginFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class AuthModule {
}
