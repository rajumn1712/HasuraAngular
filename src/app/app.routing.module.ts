import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthModule} from '@auth0/auth0-angular';
import { LoginComponent } from './login.component/login.component';
import { AddItemComponent } from './usersList/add-item/add-item.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'item',
        pathMatch: 'full'
      },
  {
      path: 'item',
      component:AddItemComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    AuthModule.forRoot({
        domain: 'dev-jht81630.us.auth0.com',
        clientId: 'wAhfGkoa0fN27nSTcjYfea44GnM2lfyY'
      }),
    RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
