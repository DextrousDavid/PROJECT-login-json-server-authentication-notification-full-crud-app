import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginServiceService, private router: Router, private route: ActivatedRoute) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this.loginService.userIsLoggedIn()) {
      this.router.navigate(['/login'], { relativeTo: this.route });
      this.loginService.userIsLoggedOut();
      return false
    }
    console.info('Hello from Login Auth', route, state);
    return this.loginService.userIsLoggedIn();
  }
}
