import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(private loginService: LoginServiceService, private router: Router, private route: ActivatedRoute){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.loginService.userIsLoggedIn()){
        this.router.navigate(['/login-page'],{relativeTo: this.route});
        this.loginService.userIsLoggedOut();
        return false
      }
      console.info(route,state)
    return this.loginService.userIsLoggedIn();
  }
  
}
