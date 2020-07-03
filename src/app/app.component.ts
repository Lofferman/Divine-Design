import { Component, ViewChild, ElementRef } from '@angular/core';
import { SiteDataService } from './common/services/site-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

constructor(private siteData: SiteDataService,
  ) { 
  this.siteData.scrollObj.subscribe(val => {
    
    this.triggerScrollTo(val)
    console.log(val)
  });
  
}

triggerScrollTo(dest) {
    console.log(dest)
    let el = document.getElementById(dest);
    el.scrollTop = el.scrollHeight;
}
/*
navigateTo(location){
  console.log(location)
if(location === 'TOP'){
  this.topLink.nativeElement.scrollIntoView({behavior: 'smooth'});
}else 
if(location === 'SERVICES'){
  this.servicesLink.nativeElement.scrollIntoView({behavior: 'smooth'});
}else 
if(location === 'CONTACT'){
  this.contactLink.nativeElement.scrollIntoView({behavior: 'smooth'});
}else{
  console.log("Error: Invalid scrollTo")
}
}*/
}