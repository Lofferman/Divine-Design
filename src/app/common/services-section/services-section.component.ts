import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ServicesModalComponent } from '../services-modal/services-modal.component';
@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  services
  ngOnInit(): void {
    this.services = [
      {
        displayName: "Haircuts",
        serviceName: "HAIRCUTS",
        colorHex:"#595959"
      },
      {
        displayName: "Perms",
        serviceName: "PERMS",
        colorHex:"#484848"
      },
      {
        displayName: "Lightening",
        serviceName: "LIGHTENING",
        colorHex:"#713945"
      },
      {
        displayName: "Wax",
        serviceName: "WAX",
        colorHex:"#853243"
      },
      {
        displayName: "Coloring",
        serviceName: "COLORING",
        colorHex:"#992A41"
      },
      {
        displayName: "Special Coloring /w Toner",
        serviceName: "SPECIALCOLORING",
        colorHex:"#C11B3E"
      },
      {
        displayName: "Other Services",
        serviceName: "OTHER",
        colorHex:"#E90B3A"
      },

    ]

  }
  openDialog(service) {
    this.dialog.open(ServicesModalComponent, {
      width: '85vw',
      data: {...service}
    });
  }
}
