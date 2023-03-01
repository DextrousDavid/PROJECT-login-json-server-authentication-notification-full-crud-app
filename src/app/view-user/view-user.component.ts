import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, UserInterface } from '../models/user';
import { UserTransmitterService } from '../services/user-transmitter.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent  {
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
  id: string | null = '';

  constructor(private router: Router, private route: ActivatedRoute, private service: UserTransmitterService) { }
  // To display customer details on view-user component(page)
  // assigned this.userForm.value.customerName to this.customerName
  // id: number | any = 0;
  // customerName: string = '';
  // customerAcctNum: string = '';
  // customerEmailAddress: string = '';
  // customerAcctType: string = '';
  // customerAge: string = '';
  // reasonForComplaint: string = '';

//Get user (method) from SecondPage, that is, Table page when (click) view-user icon.

  // routes you to Edit page
  routeToSecondPage() {
    this.router.navigate(['/secondPage/second']);
    console.log('route to Second Page clicked');
  }

  // Set user (method)
  // Edit user from view-user component to Edit Form
  routeToEditPage() {
    console.log('Profile>>');
    localStorage.setItem('id', this.userInterface.id);
    localStorage.setItem('customerName', this.userInterface.customerName);
    localStorage.setItem('customerAcctNum', this.userInterface.customerAcctNum);
    localStorage.setItem('customerEmailAddress', this.userInterface.customerEmailAddress);
    localStorage.setItem('customerAcctType', this.userInterface.customerAcctType);
    localStorage.setItem('customerAge', this.userInterface.customerAge);
    localStorage.setItem('reasonForComplaint', this.userInterface.reasonForComplaint);
    this.router.navigate(['/firstPage/edit']);
  }

  getPatchValue() {
    this.userForm.patchValue(this.service.getUserProfile);
  }

  public getParams() {
    this.id = this.route.snapshot.paramMap.get('id');
    let params = JSON.stringify(this.route.snapshot.paramMap.get('id'));
    localStorage.setItem('paramValue', params);
  }

  
  getUserProfile() {
    this.service.getUserById(this.id).subscribe({
      next: (response: any) => {
        console.log('response from getUserProfile>>',response);
        this.userInterface.id = response.id;
        this.userInterface.customerName = response.customerName
        this.userInterface.customerAcctNum = response.customerAcctNum;
        this.userInterface.customerAcctType = response.customerAcctType;
        this.userInterface.customerAge = response.customerAge;
        this.userInterface.customerEmailAddress = response.customerEmailAddress;
        this.userInterface.reasonForComplaint = response.reasonForComplaint
      },
      error: (error: any) => {
        console.error('There was an error', error)
      }
    })
  }
  
  // loads Formgroup as soon as browser opens
  ngOnInit(): void {
    this.getParams()
    this.getUserProfile()
    console.log('Get Locale storage from View User Component/page>>', this.userForm.value.customerName);
    // this.id = this.userForm.value.id;
    // this.customerName = this.userForm.value.customerName;
    // this.customerAcctNum = this.userForm.value.customerAcctNum;
    // this.customerEmailAddress = this.userForm.value.customerEmailAddress;
    // this.customerAcctType = this.userForm.value.customerAcctType;
    // this.customerAge = this.userForm.value.customerAge;
    // this.reasonForComplaint = this.userForm.value.reasonForComplaint;
        // this.getPatchValue()
    this.userInterface = this.userForm.value
    console.log('userInterface values from userForm.value>>>', this.userInterface);

    // let id: any = parseInt(this.route.snapshot.paramMap.get('id'));
   
  }
}