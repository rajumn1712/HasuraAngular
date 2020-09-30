import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth-service';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component/login.component';
import { UserProfileComponent } from './login.component/users.component';
import { AddItemComponent } from './usersList/add-item/add-item.component';
import { GraphQlModule } from './graph-ql/graph-ql.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddItemComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    GraphQlModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
