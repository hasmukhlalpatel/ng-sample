import { Injectable } from '@angular/core';
import { AdJobComponent } from './ad-job.component';
import { AdProfileComponent } from './ad-profile.component';
import { AdItem }             from './ad-item';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }

  getAds() {
    return [
      new AdItem(AdProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new AdItem(AdProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AdItem(AdJobComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new AdItem(AdJobComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  }
}

//https://stackblitz.com/angular/nqgaxegoepp?file=src%2Fapp%2Fapp.component.ts