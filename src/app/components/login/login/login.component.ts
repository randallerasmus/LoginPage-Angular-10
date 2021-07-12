import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm!: FormGroup;
  isSubmitted  =  false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.authForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }






}
