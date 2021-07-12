import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // importing AuthService and injecting it via the authentication guard’s constructor.
  constructor(private authService: AuthService){}

  // Can activate method is to grant access or deny access by calling the isLoggedIn()
  // method
  canActivate(
    // The canActivate() method returns true
    // if the isLoggedIn() methods return true i.e if the user is logged in

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn();
  }
}

