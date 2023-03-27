import { Component,OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TvShowSerService } from 'src/app/Services/tv-show-ser.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private ser:TvShowSerService){}
 tv_toprate:any=[];
 tv_popular:any=[];
 tv_OnAir:any=[];
  ngOnInit():void{
    this.ser.toprate().subscribe((res)=>{console.log(res,"good");this.tv_toprate=res.results;console.log(this.tv_toprate)} ) 
    this.ser.popular().subscribe((res)=>{console.log(res,"good");this.tv_popular=res.results;console.log(this.tv_popular)} ) 
    this.ser.OnAir().subscribe((res)=>{console.log(res,"onair");this.tv_OnAir=res.results;console.log(this.tv_OnAir)} ) 
  }

  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 5
      },
      940: {
        items: 7
      }
    },
    nav: true
  }
}
