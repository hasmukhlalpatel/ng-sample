import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UsersComponent} from './users/users.component';
import {UserDetailsComponent} from './user-details/user-details.component';

import { PhotosComponent } from './photos/photos.component';



const routes: Routes = [
  { 
    path:'',
    component:UsersComponent
  },
  { 
    path:'users',
    component:UsersComponent
  },
  { 
    path:'details/:id',
    component:UserDetailsComponent
  },  
  { 
    path:'photos',
    component:PhotosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
