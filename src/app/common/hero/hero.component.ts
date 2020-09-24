import { Component, OnInit } from '@angular/core';
import { AppointmentsDialogComponent } from 'src/app/common/appointments-dialog/appointments-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(AppointmentsDialogComponent, {
      width: '85vw',
      data: {}
    });
  }
}
