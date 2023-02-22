import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserTransmitterService } from '../services/user-transmitter.service';
import { Subscription, debounceTime } from 'rxjs'
import { User } from '../models/user';

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


  ngOnInit(): void {
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
    this.users = this.service.allUsers;
    console.log("get all Users",this.users);

  }


}
