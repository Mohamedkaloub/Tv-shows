import { TvShowSerService } from 'src/app/Services/tv-show-ser.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hmain',
  templateUrl: './hmain.component.html',
  styleUrls: ['./hmain.component.css']
})
export class HmainComponent implements OnInit {
  items:any;
  airing_today:any;
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
      }
    },
    nav: true
  }
  constructor(private tv:TvShowSerService){
  }
  ngOnInit():void{
    this.tv.today().subscribe(a=>{this.items=a;console.log})
    this.tv.airing_today().subscribe(o=>{this.airing_today=o.results;console.log("airing_today",o.results)})

    
  }
}
