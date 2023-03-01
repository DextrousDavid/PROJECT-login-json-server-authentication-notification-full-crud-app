import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  userFormTwo!: FormGroup;

    // routes you to Edit page
    constructor(private router: Router) { }

    routeToFirstPage() {
      if (this.userFormTwo.valid) {
        this.router.navigate(['/firstPage/first']);
      } else {
        alert('Please fill in your email and password')
      }
    }

    formPostInterface() {
      this.userFormTwo = new FormGroup({
        customerEmailAddress: new FormControl('', [Validators.required]),
        customerPassword: new FormControl('', [Validators.required]),
      })
    }

    ngOnInit(): void {
      this.formPostInterface()
    }
}