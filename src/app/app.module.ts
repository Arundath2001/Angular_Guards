import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { FormComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { loginGuard } from './loginguard.guard';
import { AdminGuard } from './admin.guard';
import { AdminDeactGuard } from './admin-deact.guard';
import { HttpService } from './http.service';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    StudentComponent,
    FormComponent,
    NavbarComponent,
    LogoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [HttpService, loginGuard, AdminGuard, AdminDeactGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
