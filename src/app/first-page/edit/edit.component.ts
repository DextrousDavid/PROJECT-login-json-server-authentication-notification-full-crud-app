import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, UserInterface } from '../../models/user';
import { UserTransmitterService } from '../../services/user-transmitter.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  userForm!: FormGroup;
  users: User[] | any = [];
  userInterface: UserInterface = {
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    phoneNumber: '',
  }

  constructor(private router: Router, private route: ActivatedRoute, private service: UserTransmitterService) {}

  formPostInterface() {
    this.userForm = new FormGroup({
      firstName: new FormControl(localStorage.getItem('firstName'), [Validators.required]),
      lastName: new FormControl(localStorage.getItem('lastName'), [Validators.required]),
      address: new FormControl(localStorage.getItem('address'), [Validators.required]),
      phoneNumber: new FormControl(localStorage.getItem('phoneNumber'), [Validators.required]),
      gender: new FormControl(localStorage.getItem('gender'), [Validators.required]),
    })
  }

// routes you to Edit page
routeToFirstPage() {
  this.router.navigate(['/firstPage/edit']);
}

// Posts edit form Post
formPost() {
  console.log('Submited form from Edit>>',this.userForm.value)
  // console.log('You submitted the Edit form>>', this.users);
}

getPatchValue() {
  this.userForm.patchValue(this.service.getUserProfile);
}

//   // loads Formgroup as soon as browser opens
ngOnInit(): void {
  this.formPostInterface()
  // this.getPatchValue()
}
}