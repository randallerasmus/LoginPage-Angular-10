import { Injectable } from '@angular/core';
import {User} from './user';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private http: HttpClient) { }

  public loginUserFromRemote(user: User): Observable<any> {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin' : '',
        Allow: 'GET',
        'Content-type': 'Application/json',
      }
    };
    // const headers = new HttpHeaders({Authorization: 'Basic' + btoa(user.email + ':' + user.password)});
    return this.http.post<any>('http://localhost:8080/api/v1/registration/login', user);
  }
}
