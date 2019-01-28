import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotosComponent } from './photos/photos.component';

import { UserDataService } from './user-data.service';
import { PhotoService } from './photo.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersComponent,
    UserDetailsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserDataService,PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//https://www.youtube.com/watch?v=z4JUm0Bq9AM