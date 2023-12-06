import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '<p>Logging out...</p>',
})
export class LogoutComponent {
  constructor(private authService: HttpService, private router: Router) {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
