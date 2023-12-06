import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private httpService: HttpService, private router: Router) {}

  logout(): void {
    this.httpService.logout();
    this.router.navigate(['/login']);
  }
}
