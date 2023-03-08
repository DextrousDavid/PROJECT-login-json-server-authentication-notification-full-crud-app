import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  token: string | null = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  setUserToken(token: string){
    localStorage.setItem('token', token)
  }

  getUserToken(): string | null {
    return localStorage.getItem('token');
  }

  userIsLoggedIn(){
    return this.getUserToken() != null;
  }

  userIsLoggedOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  loginUser({customerEmailAddress, customerPassword}: any): Observable<any>{
    if(customerEmailAddress === 'aimakhededavido@gmail.com' && customerPassword === 'Davidsunday123!') {
      this.setUserToken('veqi3p9h2Uae6xBfWHbd')
      return of(
        {
          name: 'David Aimakhede',
          customerEmailAddress: 'aimakhededavido@gmail.com'
        }
      )
    }
    return throwError(new Error('Failed to Login'))
  }
}
