import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegistrationService} from '../../../registration.service';
import {User} from '../../../user';
import {error} from '@angular/compiler/src/util';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm!: FormGroup;
  isSubmitted  =  false;

  user = new User();
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder,
              private regservice: RegistrationService) { }

  ngOnInit(): void {
    this.authForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  get formControls() { return this.authForm.controls; }


  loginUser(){
    // this.isSubmitted = true;
    // if (this.authForm.invalid){
    //   return;
    // }
    // this.authService.signIn(this.authForm.value);
    // this.router.navigateByUrl('/admin');
    this.regservice.loginUserFromRemote(this.user).subscribe(
      data => console.log('response received'),
      err => console.log('exception occured')
    );

  }



}
