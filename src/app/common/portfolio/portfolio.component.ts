import { Component, OnInit, ViewChild } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';


@Component({
  selector: 'app-portfolio',
  templateUrl: 
  './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent implements OnInit {

  private urls: string[] = [
    'assets/img/portfolio/1.jpg',
    'assets/img/portfolio/2.jpg',
    'assets/img/portfolio/3.jpg',
];

public get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
        imageUrl: m
});
}

ngOnInit(){}
}
