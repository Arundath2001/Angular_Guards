import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls : ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private httpService: HttpService, private value: Router) {}

  login(): void {
    const Uname = this.username.trim().toLowerCase();
    const Pass = this.password.trim().toLowerCase();

    if (Uname === 'admin' && Pass === 'admin') {
      this.httpService.login('admin', 'admin');
      this.value.navigate(['/admin']);
    } else if (Uname === 'user' && Pass === 'user') {
      this.httpService.login('user', 'user');
      this.value.navigate(['/student']);
    } else {
      this.errorMessage = 'Invalid username or password. Please try again!';
    }
  }
}
