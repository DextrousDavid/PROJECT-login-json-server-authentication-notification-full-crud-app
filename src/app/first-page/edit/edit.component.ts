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
    id: 0,
    customerName: '',
    customerAcctNum: '',
    customerEmailAddress: '',
    customerAcctType: '',
    customerAge: '',
    reasonForComplaint: '',
  }

  // To display customer details on view-user component(page)
  // assigned this.userForm.value.customerName to this.customerName
  customerName: string = '';
  customerAcctNum: string = '';
  customerEmailAddress: string = '';
  customerAcctType: string = '';
  customerAge: string = '';
  reasonForComplaint: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private service: UserTransmitterService) { }

  formPostInterface() {
    this.userForm = new FormGroup({
      id: new FormControl(localStorage.getItem('id'), [Validators.required]),
      customerName: new FormControl(localStorage.getItem('customerName'), [Validators.required]),
      customerAcctNum: new FormControl(localStorage.getItem('customerAcctNum'), [Validators.required]),
      customerEmailAddress: new FormControl(localStorage.getItem('customerEmailAddress'), [Validators.required]),
      customerAcctType: new FormControl(localStorage.getItem('customerAcctType'), [Validators.required]),
      customerAge: new FormControl(localStorage.getItem('customerAge'), [Validators.required]),
      reasonForComplaint: new FormControl(localStorage.getItem('reasonForComplaint'), [Validators.required]),

      // gender: new FormControl(localStorage.getItem('gender'), [Validators.required]),
    })
  }

  // routes you to Edit page
  routeToFirstPage() {
    this.router.navigate(['/firstPage/first']);
    console.log('route to First Page clicked');
  }

  // Posts edit form Post
  formPost() {
    if (this.userForm.valid) {
      this.userInterface = this.userForm.value;
      this.service.editFormValues(this.userInterface, this.userInterface.id).subscribe({
        next: (res: any) => {
          console.log("response>>", res);
          this.router.navigateByUrl("/secondPage/second");
        },
        error: (error: any) => {
          console.error("error from API>>", error)
        },
        complete: () => console.info("Put Request!!!")
      })
    }

    // console.log('You submitted the Edit form>>', this.users);
  }

  getPatchValue() {
    this.userForm.patchValue(this.service.getUserProfile);
  }

  //   // loads Formgroup as soon as browser opens
  ngOnInit(): void {
    this.formPostInterface()
    console.log('Get Locale storage from Edit component>>', this.userForm.value.customerName);
    this.customerName = this.userForm.value.customerName;
    this.customerAcctNum = this.userForm.value.customerAcctNum;
    this.customerEmailAddress = this.userForm.value.customerEmailAddress;
    this.customerAcctType = this.userForm.value.customerAcctType;
    this.customerAge = this.userForm.value.customerAge;
    this.reasonForComplaint = this.userForm.value.reasonForComplaint;
    this.getPatchValue()
  }
}