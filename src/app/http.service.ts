import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private datacheck = false;
  private isAdmin = false;
  login(username: string, password: string): boolean {
    this.datacheck = true;
    this.isAdmin = username.toLowerCase() === 'admin';
    return this.datacheck;
  }
  logout(): void {
    this.datacheck = false;
    this.isAdmin = false;
  }
  check(): boolean {
    return this.datacheck;
  }
  getIsAdmin(): boolean {
    return this.isAdmin;
  }
}
