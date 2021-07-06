import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  appUser: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const response = this.http.get('localhost:8080/api/v1/registration/');
    response.subscribe((data) => this.appUser = response);
  }





}
