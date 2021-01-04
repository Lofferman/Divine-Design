import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

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
  constructor() { }
  currentLocation
  innerWidth
  menuClicked = false
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(window.innerWidth)
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
