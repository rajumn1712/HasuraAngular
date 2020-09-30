import {Component,Inject, OnInit} from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';


@Component({
    selector:'login-component',
    template:`<ng-container *ngIf="auth.isAuthenticated() | async; else loggedOut">
    <button (click)="auth.logout({ returnTo: document.location.origin })">
      Log out
    </button>
  </ng-container>

  <ng-template #loggedOut>
    <button (click)="auth.login()">Log in</button>
  </ng-template>
  `
})
export class LoginComponent implements OnInit{

    constructor(@Inject(DOCUMENT) public document: Document,public auth:AuthService,private router:Router){
      if(auth.isAuthenticated()){
        router.navigate(['/add-item']);
      }
    }
    ngOnInit(){

    }
}