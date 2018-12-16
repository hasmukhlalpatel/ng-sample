import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user$: Object;

  id:object;

  constructor( private dataServcie: UserDataService, private route: ActivatedRoute ) {
    this.route.params.subscribe(p=> this.id = p.id);
   }


  ngOnInit() {
    this.dataServcie.get(this.id).subscribe(data=> {
      this.user$ = data;
    } );
  }

}
