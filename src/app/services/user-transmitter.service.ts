import { Injectable } from '@angular/core';
import { UserInterface } from '../models/user';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTransmitterService {
private userFormService$ = new Subject<any>()

  constructor() { }

  setFormObservable(user: []) {
    this.userFormService$.next(user);
    console.log('User in Observable>>', user);
  }

  getFormObservable(): Observable<any>{
    return this.userFormService$.asObservable()
  }
}
