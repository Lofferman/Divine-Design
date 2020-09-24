import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AppointmentsDialogComponent } from 'src/app/common/appointments-dialog/appointments-dialog.component';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  items
  constructor(public dialog: MatDialog) {}

    ngOnInit(){

    }
    openDialog() {
      this.dialog.open(AppointmentsDialogComponent, {
        width: '85vw',
        data: {}
      });
    }
}
