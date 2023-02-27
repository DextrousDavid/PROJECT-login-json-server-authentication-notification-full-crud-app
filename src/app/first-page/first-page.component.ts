import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, UserInterface } from '../models/user';
import { UserTransmitterService } from '../services/user-transmitter.service';


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
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    phoneNumber: '',
  }

  constructor(private router: Router, private route: ActivatedRoute, private service: UserTransmitterService) { }
  
  // ConsoleForm
  routeToSecondPage() {
    this.router.navigate(['/secondPage/second'])
  }


  formPostInterface() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
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
    }
    //this.router.navigate(['/secondPage/second'], {relativeTo: this.route});
  }

  // loads FormGroup as soon as browser opens
  ngOnInit(): void {
    this.formPostInterface() 
  }
}
