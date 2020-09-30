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
    someString = '';

    constructor(private apollo: Apollo, private auth: AuthService, private router: Router) {
        if (!auth.isAuthenticated()) {
            router.navigate(['/login']);
        }
        auth.handleAuthentication();
    }

    ngOnInit() {
    }

    addItemInDb() {
        this.apollo.mutate<any>({
            mutation: Query.AddMutation,
            variables: {
                'objects': [
                    {
                        'text': this.someString,
                        'user': localStorage.getItem('user_id')
                    }
                ]
            }
        }).subscribe(({ data }) => {
            console.log(data);
            location.reload();
        }, (error) => {
            console.log(`An error occurred ${error}`);
        })
    }
}
