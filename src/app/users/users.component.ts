import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Object;

  constructor( private dataServcie : UserDataService ) { }

  ngOnInit() {
    this.dataServcie.getAll().subscribe(data=> {
      this.users$ = data;
    });

  }

}
