import { DetailsComponent } from './Components/details/details.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
