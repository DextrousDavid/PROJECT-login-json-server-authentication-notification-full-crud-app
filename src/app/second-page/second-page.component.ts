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
    localStorage.setItem('customerName', user.customerName);
    localStorage.setItem('customerAcctNum', user.customerAcctNum);
    localStorage.setItem('customerEmailAddress', user.customerEmailAddress);
    localStorage.setItem('customerAcctType', user.customerAcctType);
    localStorage.setItem('customerAge', user.customerAge);
    localStorage.setItem('reasonForComplaint', user.reasonForComplaint);
    this.router.navigate(['/firstPage/edit']);
  }

  routeToViewUserPage(user: User) {
    console.log('User>>', user)
    this.router.navigate([`/view-user/${user.id}`]).then(() => {
      location.reload();
    })

  }
  
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

  }

}
