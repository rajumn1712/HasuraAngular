import {Component,Inject} from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { AuthService } from '../auth-service';


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
  <div *ngIf="auth.isAuthenticated$">
  <app-add-item></app-add-item>
  </div>
  `
})
export class LoginComponent{

    constructor(@Inject(DOCUMENT) public document: Document,public auth:AuthService){}
}