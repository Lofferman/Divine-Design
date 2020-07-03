import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-services-modal',
  templateUrl: './services-modal.component.html',
  styleUrls: ['./services-modal.component.scss']
})
export class ServicesModalComponent implements OnInit {
  items
  constructor(
    public dialogRef: MatDialogRef<ServicesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.formatData()
  }

  formatData = () => {

    
    switch (this.data.serviceName) {
      case 'COLORING':
        this.items = [
          {
            name:'Roots',
            value:'55',
            sub:false
          },
          {
            name:'/w HL and LL',
            value:'85',
            sub:true
          },
          {
            name:'/w demi',
            value:'67',
            sub:true
          },        {
            name:'All Over',
            value:'75',
            sub:false
          },        {
            name:'Extra Bowl',
            value:'12',
            sub:false
          }
        ]
        break;

        case 'PERM':
          this.items = [
            {
              name:'Roots',
              value:'55',
              sub:false
            },
            {
              name:'/w HL and LL',
              value:'85',
              sub:true
            },
            {
              name:'/w demi',
              value:'67',
              sub:true
            },        {
              name:'All Over',
              value:'75',
              sub:false
            },        {
              name:'Extra Bowl',
              value:'12',
              sub:false
            }
          ]
          break;

          case 'WAX':
            this.items = [
              {
                name:'Roots',
                value:'55',
                sub:false
              },
              {
                name:'/w HL and LL',
                value:'85',
                sub:true
              },
              {
                name:'/w demi',
                value:'67',
                sub:true
              },        {
                name:'All Over',
                value:'75',
                sub:false
              },        {
                name:'Extra Bowl',
                value:'12',
                sub:false
              }
            ]
            break;

            case 'HAIRCUTS':
              this.items = [
                {
                  name:'Roots',
                  value:'55',
                  sub:false
                },
                {
                  name:'/w HL and LL',
                  value:'85',
                  sub:true
                },
                {
                  name:'/w demi',
                  value:'67',
                  sub:true
                },        {
                  name:'All Over',
                  value:'75',
                  sub:false
                },        {
                  name:'Extra Bowl',
                  value:'12',
                  sub:false
                }
              ]
              break;

              case 'OTHER':
                this.items = [
                  {
                    name:'Roots',
                    value:'55',
                    sub:false
                  },
                  {
                    name:'/w HL and LL',
                    value:'85',
                    sub:true
                  },
                  {
                    name:'/w demi',
                    value:'67',
                    sub:true
                  },        {
                    name:'All Over',
                    value:'75',
                    sub:false
                  },        {
                    name:'Extra Bowl',
                    value:'12',
                    sub:false
                  }
                ]
                break;
    
      default:
        break;
    }
  }


}
