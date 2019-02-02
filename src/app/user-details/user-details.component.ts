import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user$: Object;

  id: object;

  constructor(private dataServcie: UserDataService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(p => this.id = p.id);
  }


  ngOnInit() {
    //var id = this.route.snapshot.paramMap.get('id');
    this.dataServcie.get(this.id).subscribe(data => {
      this.user$ = data;
    });
  }

  goBack() {
    //
    //this.router.navigate([this.id],{relativeTo : this.route });
    this.router.navigate(['../', { id: this.id }], { relativeTo: this.route });
  }

  showContact() {
    //
    //this.router.navigate([this.id],{relativeTo : this.route });
    this.router.navigate(['contact'], { relativeTo: this.route });
  }

}
