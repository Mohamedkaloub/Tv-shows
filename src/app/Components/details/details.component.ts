import { TvShowSerService } from 'src/app/Services/tv-show-ser.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  onetv:any;
  similar:any;
  productId: any;
  credits:any;
  constructor(private route: ActivatedRoute, private tv:TvShowSerService) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get("id");
    this.tv.GetOne(this.productId).subscribe(o=>{this.onetv=o});
    this.tv.similar(this.productId).subscribe(o=>{this.similar=o.results;console.log("similar",o.results)})
    this.tv.credits(this.productId).subscribe(o=>{this.credits=o.cast;console.log("credits",o.cast)})

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
customOptions1: OwlOptions = {
  loop: false,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
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
      items: 3
    },
    940: {
      items: 3
    }
  },
  nav: true
}
}
