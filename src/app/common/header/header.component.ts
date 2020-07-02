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

  top(){}

  navigateTo(location){
    console.log(location)
  if(location === 'TOP'){
    this.topLink.nativeElement.scrollIntoView({behavior: 'smooth'});
  }else 
  if(location === 'SERVICES'){
    this.stylistsLink.nativeElement.scrollIntoView({behavior: 'smooth'});
  }else 
  if(location === 'CONTACT'){
    this.contactLink.nativeElement.scrollIntoView({behavior: 'smooth'});
  }else{
    console.log("Error: Invalid scrollTo")
  }
  this.currentLocation = location
  }
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
}
