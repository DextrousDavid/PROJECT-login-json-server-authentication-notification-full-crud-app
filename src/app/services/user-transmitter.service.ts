import { Injectable } from '@angular/core';
import { User, UserInterface } from '../models/user';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTransmitterService {
  private userFormService$ = new Subject<any>()
  

  //allUsers service, makes all users available to other components
  allUsers: User[] = [];
  isEdit: boolean = false;

  user: UserInterface = {
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    phoneNumber: '',
  }
  constructor() { }

  setFormObservable(user: []) {
    this.userFormService$.next(user);
    // console.log('User in Observable>>', user);
  }

  getFormObservable(): Observable<any>{
    return this.userFormService$.asObservable()
  }

  setUserProfile(user: User) {
    this.user = user
    console.log('User From Services>>', this.user);
  }

  getUserProfile() {
    if(this.user === undefined || this.user === null) {
      return null
    } else {
      return this.user;
    }
  }

  setIsEdit(isEdit: Boolean) {
    return this.isEdit === isEdit
  }
  
  getIsEdit() {
    return this.isEdit
  }
}
