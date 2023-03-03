import { Injectable } from '@angular/core';
import { User, UserInterface } from '../models/user';
import { map, Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserTransmitterService {
  private userFormService$ = new Subject<any>()
  

  // allUsers service, makes all users available to other components
  allUsers: User[] = [];
  isEdit: boolean = false;
  user: UserInterface = {
    id: 0,
    customerName: '',
    customerAcctNum: '',
    customerEmailAddress: '',
    customerAcctType: '',
    customerAge: '',
    reasonForComplaint: '',
  }
  baseUrl: string = "http://localhost:3000/posts";
  
  constructor(private http: HttpClient) { }

  // Post method, form
  public createFormAPI(user: UserInterface): Observable<any>{
    const formAPI = `${this.baseUrl}`;
    return this.http.post<any>(formAPI, user).pipe(map((response: any) => {
      return response;
    }));
  }

  // Displays response on the Table
  public getFormAPI():Observable<any>{
    const formAPI = `${this.baseUrl}`;
    return this.http.get<any>(formAPI).pipe(map((response:any) => {
      return response;
    }));
  }

  public getUserById(id: string | null):Observable<any> {
    let getParams: any = localStorage.getItem('paramValue');
    let paramResult = JSON.parse(getParams);
    id = paramResult;
    
    const getByIdApi = `${this.baseUrl}/${id}`
    console.log('Get by id Api>>', getByIdApi);
    return this.http.get<any>(getByIdApi).pipe(map((response: any) => {
      return response
    }))
  }

  // Edit form value (row)
  public editFormValues(user: UserInterface, id: any): Observable<any>{
    const getId: string | null = localStorage.getItem('id')
    id = getId;
    const formAPI = `${this.baseUrl}/${id}`;
    console.log("edit url>>", formAPI);
    return this.http.put<any>(formAPI, user).pipe(map((response:any) => {
      localStorage.removeItem('id')
      return response;
    }))
  }

  // Delete form value (row)
  public deleteFormValues(id: any): Observable<any>{
    const formAPI = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(formAPI).pipe(map((response: any) => {
      return response;
    }))
  }

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
