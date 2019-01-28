import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(private dataServcie : PhotoService ) { }

  photos: any[];

  ngOnInit() {
    this.dataServcie.getAll().subscribe(data=> {
      this.photos = data;
    });
  }

}

