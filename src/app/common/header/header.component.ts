import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SiteDataService } from '../services/site-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
stylists
public isMenuOpen: boolean = false;

@ViewChild('top') topLink: ElementRef;
@ViewChild('stylists') stylistsLink: ElementRef;
@ViewChild('contact') contactLink: ElementRef;
  constructor(private siteData: SiteDataService) { }
  currentLocation
  ngOnInit(): void {
    
  }


  navigateTo(location){
    console.log(location)
    this.currentLocation = location
  this.siteData.setScrollObj(location)
  }
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
}
