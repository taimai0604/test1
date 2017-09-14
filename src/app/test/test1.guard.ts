import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Test1Guard implements CanActivateChild {
  constructor(private router: Router) {

  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const a = false;
    if (a === false) {
      this.router.navigate(['/test']);
    }
    return a;
  }
}
