import { Component } from '@angular/core';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-user-profile',
  template: `
    <ul *ngIf="auth.user$ | async as user">
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
    </ul>`
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {}
}