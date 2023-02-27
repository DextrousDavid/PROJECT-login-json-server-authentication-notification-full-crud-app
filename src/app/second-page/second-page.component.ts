import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserTransmitterService } from '../services/user-transmitter.service';
import { Subscription, debounceTime } from 'rxjs'
import { User, UserInterface } from '../models/user';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  getFormValues$!: Subscription;
  users: User[] | any = [];
  constructor(private router: Router, private route: ActivatedRoute, private service: UserTransmitterService) {}
  
  // routes you to first page
  routeToFirstPage() {
    this.router.navigate(['/firstPage/first']);
  }

  routeToEditPage(user: User) {
    console.log('Profile>>', user);
    // this.service.setUserProfile(user);
    // this.service.setIsEdit(true);
    localStorage.setItem('id', user.id);
    localStorage.setItem('firstName', user.firstName);
    localStorage.setItem('lastName', user.lastName);
    localStorage.setItem('gender', user.gender);
    localStorage.setItem('phoneNumber', user.phoneNumber);
    localStorage.setItem('address', user.address);
    this.router.navigate(['/firstPage/edit']);
  }

  //Delete Customer row by id
  //Splice method
  // onDelete(elem: any) {
  //   this.users.forEach((row: any, index: any) => {
  //     if(row === elem) {
  //       this.users.splice(index, 1);
  //     }
  //   })
  // }

  //Get form values
  getFormValues(){
    this.service.getFormAPI().subscribe({
      next: (response: any) => {
        this.users = response;
        console.log("response from API>>", response)
      },
      error: (error: any) => {
        console.error("error from API>>", error)
      },
      complete: () => console.info("Done, GetFormValues!")
    })
  }

  // Delete form values
  onDelete(id: any) {
    this.service.deleteFormValues(id).subscribe({
      next: (response: any) => {
        console.log('Row Deleted, please refresh>>', response);
        this.ngOnInit();
        return response;
      },
      error: (error: any) => {
        console.error("error from API>>", error)
      },
      complete: () => console.info("Get Resquest!")
    })
    console.log("id>>", id);
  }

  ngOnInit(): void {
    this.getFormValues();
    // this.getFormValues$ = this.service.getFormObservable().pipe(debounceTime(200)).subscribe({
    //   next: (elem: any) => {
    //     console.log('Form Values 123>>', elem);
    //     this.users = elem;
    //     console.log('Table Values>>', this.users);
    //   },
    //   error: (error: any) => {
    //     console.error('Error from API>>', error)
    //   },
    //   complete: () => console.info('Form Values have entered the array>>')
    // });

    // stores the value of this.services.allUsers in this.users 
    // this.users = this.service.allUsers;
    // console.log("All Users, second-page>>", this.users);

  }

}
