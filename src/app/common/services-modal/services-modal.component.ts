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
            name:'w/ HL and LL',
            value:'85',
            sub:true
          },
          {
            name:'w/ demi',
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

        case 'PERMS':
          this.items = [
            {
              name:'Basic',
              value:'55',
              sub:false
            },
            {
              name:'Specialty',
              value:'85+',
              sub:false
            }
          ]
          break;

          case 'WAX':
            this.items = [
              {
                name:'Brows',
                value:'15',
                sub:false
              },
              {
                name:'Lip',
                value:'10',
                sub:false
              },
              {
                name:'Chin',
                value:'10',
                sub:false
              },        {
                name:'Armpits',
                value:'25',
                sub:false
              }
            ]
            break;

            case 'HAIRCUTS':
              this.items = [
                {
                  name:'Clippers',
                  value:'15',
                  sub:false
                },
                {
                  name:'Scissors',
                  value:'18',
                  sub:false
                },
                {
                  name:'Trim w/ CS',
                  value:'12',
                  sub:false
                },        {
                  name:'Children',
                  value:'12',
                  sub:false
                }
              ]
              break;

              case 'LIGHTENING':
                this.items = [
                  {
                    name:'Foil',
                    value:'4',
                    sub:false
                  },
                  {
                    name:'10-20',
                    value:'45',
                    sub:false
                  },
                  {
                    name:'All over (3 B)',
                    value:'85',
                    sub:false
                  },
                  {
                    name:'Extra Bowl',
                    value:'10',
                    sub:false
                  }
                ]
                break;

                case 'SPECIALCOLORING':
                  this.items = [
                    {
                      name:'Balayage',
                      value:'75+',
                      sub:false
                    },
                    {
                      name:'HL w/ smudge root',
                      value:'',
                      sub:false
                    },
                    {
                      name:'Halo',
                      value:'55',
                      sub:true
                    },
                    {
                      name:'All over',
                      value:'85+',
                      sub:true
                    }
                  ]
                  break;

              case 'OTHER':
                this.items = [
                  {
                    name:'Shampoo/Set/Style',
                    value:'18',
                    sub:false
                  },
                  {
                    name:'Shampoo/Cut/Blow dry',
                    value:'20',
                    sub:false
                  },
                  {
                    name:'Shampoo/Cut/Style',
                    value:'25',
                    sub:false
                  },        {
                    name:'Style',
                    value:'15',
                    sub:false
                  },        {
                    name:'Wash',
                    value:'10',
                    sub:false
                  }
                ]
                break;
    
      default:
        break;
    }
  }


}
