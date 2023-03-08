import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, UserInterface } from '../models/user';
import { UserTransmitterService } from '../services/user-transmitter.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  userForm!: FormGroup;
  users: User[] | any = [];
  userInterface: UserInterface = {
    id: 0,
    customerName: '',
    customerAcctNum: '',
    customerEmailAddress: '',
    customerAcctType: '',
    customerAge: '',
    reasonForComplaint: '',
  }

  constructor(private router: Router, private route: ActivatedRoute, private service: UserTransmitterService, private toastr: ToastrService) { }
  
  // ConsoleForm
  routeToSecondPage() {
    this.router.navigate(['/secondPage/second'])
  }


  formPostInterface() {
    this.userForm = new FormGroup({
      customerName: new FormControl('', [Validators.required]),
      customerAcctNum: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
      customerEmailAddress: new FormControl('', [Validators.required, Validators.email]),
      customerAcctType: new FormControl('', [Validators.required] ),
      customerAge: new FormControl('', [Validators.required, Validators.min(18), Validators.max((75))]),
      reasonForComplaint: new FormControl('', [Validators.required]),
    })
  }

  formPost() {
    // this.users.push(this.userForm.value);

    // this.userForm.value; takes the data gotten from FormGroup and pushes it into this.service.allUsers.
    // open user-transmitter.services.ts, you'll find the allUsers variable, which stores the User []. ~~single users~~
    // this.service.allUsers.push(this.userForm.value);
    // this.service.setFormObservable(this.users);
    if(this.userForm.valid){
      this.userInterface = this.userForm.value;
      this.service.createFormAPI(this.userInterface).subscribe({
        next: (response: any) => {
          console.log("response from API at Form submit>>", response);
          this.router.navigate(['/secondPage/second'], {relativeTo: this.route});
        },
        error: (error: any) => {
          console.error("error from API>>", error)
        },
        complete: () => console.info("Post Request!")
      })
    } else {
      this.toastr.warning('Thank you', 'Please fill out the form');
    }
    //this.router.navigate(['/secondPage/second'], {relativeTo: this.route});
  }

  // loads FormGroup as soon as browser opens
  ngOnInit(): void {
    this.formPostInterface() 
  }
}
