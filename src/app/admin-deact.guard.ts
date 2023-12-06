import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface deactive {
  canDeactivate: () => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AdminDeactGuard implements CanDeactivate<deactive> {
  canDeactivate(component: deactive,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
    const canDeactivate = component.canDeactivate ? component.canDeactivate() : true;

    if (!canDeactivate) {
      const confirmed = window.confirm('Do you really want to leave?');
      if (!confirmed) {
        alert('Form cancellation!');
      }
    }

    return canDeactivate;
  }
}

