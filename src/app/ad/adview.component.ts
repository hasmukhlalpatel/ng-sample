import { Component, OnInit } from '@angular/core';

import { AdService }         from './ad.service';
import { AdItem }            from './ad-item';

@Component({
  selector: 'ad-view',
  template: `
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `
})
export class AdViewComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    console.log('Ads loading');
    this.ads = this.adService.getAds();
  }
}