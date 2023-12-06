import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { FormComponent } from './contact/contact.component';
import { loginGuard } from './loginguard.guard';
import { AdminGuard } from './admin.guard';
import { AdminDeactGuard } from './admin-deact.guard';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [loginGuard, AdminGuard] },
  { path: 'student', component: StudentComponent, canActivate: [loginGuard] },
  { path: 'contact', component: FormComponent, canActivate: [loginGuard], canDeactivate: [AdminDeactGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [loginGuard] },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

