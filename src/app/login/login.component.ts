import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';
import { AuthGuard } from './auth.guard';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userFormTwo!: FormGroup;

    // routes you to Edit page
    constructor(private router: Router, private toastr: ToastrService,
      private service: LoginServiceService, private loginGuard: AuthGuard, private route: ActivatedRoute) { }

    routeToFirstPage() {
      if(this.userFormTwo.valid){
        this.service.loginUser(this.userFormTwo.value).subscribe({
          next: (token: any) => {
            this.service.setUserToken(token.name),
            this.router.navigate(['firstPage/first']),
            this.toastr.success('Login Successfull!');
            console.log('token>>', token);
          },
          error: (error: any) => {
            console.error('login error>>', error)
            this.toastr.error('Invalid details');
          },
          complete: () => console.info('Login request!')
        })
      }
    }

    formPostInterface() {
      this.userFormTwo = new FormGroup({
        customerEmailAddress: new FormControl('', [Validators.required, Validators.email]),
        customerPassword: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      })
    }

    userShouldLogoutAfterLogin(){
      if(this.service.userIsLoggedIn() && !this.loginGuard.canActivate == false){
        this.router.navigate(['/login'],{relativeTo: this.route})
      }
    }

    ngOnInit(): void {
      this.formPostInterface()
      // this.userShouldLogoutAfterLogin()

      // step1: redirects you back to form page if user is already logged in.
      if (this.service.userIsLoggedIn()) {
        this.router.navigate(['firstPage/first']);
      }
    }

}