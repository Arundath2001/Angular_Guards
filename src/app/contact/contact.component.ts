import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { deactive } from '../admin-deact.guard';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls : ['./contact.component.scss']
})
export class FormComponent implements deactive {
  private formnew: boolean = false;
  constructor(private router: Router) {}

  canDeactivate(): boolean {
    if (this.formnew) {
      return window.confirm('Do you really want to leave the form without saving?');
    }
    return true;
  }
  cancel(): void {
    this.formnew = true;
    const canDeactivate = this.canDeactivate();
    if (canDeactivate) {
      this.router.navigate(['/']);
    }
  }
}
