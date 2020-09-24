import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
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
  innerWidth
  menuClicked = false
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(window.innerWidth)
  }


  navigateTo(location){
    console.log(location)
    this.currentLocation = location
  this.siteData.setScrollObj(location)
  }
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if(innerWidth < 768){
      return 'small'
    }else{
      return 'large'
    }

  }
  toggleMenu() {
    this.menuClicked = !this.menuClicked;
  }
}
