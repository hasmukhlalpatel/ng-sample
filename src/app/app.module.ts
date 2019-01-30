import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotosComponent } from './photos/photos.component';
import { AdComponent } from './ad/ad.component';
import { AdBannerComponent } from './ad/ad-banner.component';
import { AdJobComponent } from './ad/ad-job.component';
import { AdProfileComponent } from './ad/ad-profile.component';
import { AdViewComponent } from './ad/adview.component';

import { UserDataService } from './user-data.service';
import { PhotoService } from './photo.service';
import { AdService } from './ad/ad.service';

import { AdDirective }          from './ad/ad.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersComponent,
    UserDetailsComponent,
    PhotosComponent,
    AdComponent,
    AdBannerComponent,
    AdJobComponent,
    AdProfileComponent,
    AdViewComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserDataService, PhotoService, AdService],
  entryComponents:[AdJobComponent, AdProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

//https://www.youtube.com/watch?v=z4JUm0Bq9AM