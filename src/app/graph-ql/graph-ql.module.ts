import { NgModule } from '@angular/core';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { Apollo,ApolloModule } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class GraphQlModule { 
constructor(apollo:Apollo,httpLink:HttpLink){
  const uri = 'https://customhasura-backend.herokuapp.com/v1/graphql';
  const authHeader = new HttpHeaders()
  .set('X-Hasura-Access-Key', 'something_secret')
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
    .set('X-Hasura-Role', 'user')
    .set('X-Hasura-User-Id', JSON.stringify(localStorage.getItem('user_id')));

    console.log(localStorage.getItem('user_id'));
    const http = httpLink.create({uri,headers:authHeader});

    apollo.create({
      link:http,
      cache: new InMemoryCache()
    })
}

}
