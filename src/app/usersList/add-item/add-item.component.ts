import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { AuthService } from '../../auth-service';
import { Router } from '@angular/router';
import * as Query from '../../queries';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

    title='';
    description = '';

    constructor(private apollo: Apollo, private auth: AuthService, private router: Router) {
        if (!auth.isAuthenticated()) {
            router.navigate(['/login']);
        }
        auth.handleAuthentication();
    }

    ngOnInit() {
    }

    addItemInDb() {
        this.apollo.mutate({
      mutation: Query.AddMutation,
      variables:{
          objects:[
            {
                'decsription': this.description,
                'title':this.title,
                'userid': '20ad2eaa-1538-4a58-be6a-7ff00c2d798a'
              }
          ]
      }   
    }).subscribe(({ data }) => {
      location.reload();
    }, (error) => {
      console.log('Could not add due to ' + error);
    });
    }
}
