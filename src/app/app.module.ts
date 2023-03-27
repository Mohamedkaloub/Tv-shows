import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import  {FormsModule} from '@angular/forms'
import { RatingModule } from 'primeng/rating';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HmainComponent } from './Components/hmain/hmain.component';
import { DetailsComponent } from './Components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HmainComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    CalendarModule, 
    FormsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {

 
 }
