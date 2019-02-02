import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { PhotosComponent } from './photos/photos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: UsersComponent },
  { 
    path: 'users', component: UsersComponent ,
    // children :[
    //   {path:'contact' , component: ContactComponent }
    // ]
  },
  { path: 'details/:id', component: UserDetailsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UsersComponent,
  UserDetailsComponent,
  PhotosComponent,
  PageNotFoundComponent]