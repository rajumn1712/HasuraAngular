import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { AuthService } from '../../auth-service';
import { Router } from '@angular/router';

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
  }

  ngOnInit() {
  }
}
