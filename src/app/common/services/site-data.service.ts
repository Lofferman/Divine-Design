import { Injectable } from '@angular/core';
import { Dropbox } from 'dropbox';

const accessToken = 'mV9pKbDM0MAAAAAAAAAAKAJZQPZ62X7MW-DNW3sCjIJR1_mbuWyVcjQPUqeYw9Ws';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {
  public auth: any;
   dbx
   thumbnails
  constructor() {     
    this.dbx = new Dropbox({  
    accessToken,  
    fetch  
  }); }

  

  getOAuth(){
 
  }

/*   getStylists(){
    this.dbx.filesListFolder({  
      path: ''  
    }).then(response => console.log(response))

  } */

  getStylists = async () => {  
    const response = await this.dbx.filesListFolder({  
      path: '',   
      limit: 5  
    })
  
  console.log(response)  
  }
  getStylistPhotos = async (id) => {  
    console.log(id)
  const response = this.dbx.filesListFolder({   
        path: `/Stylists/${id}`,
        limit: 10 
    });
  
  console.log(response)
  this.getThumbnails(response)
  return this.thumbnails;
  }

  getThumbnails = async (files) => {
    this.thumbnails
    let thumbnail
    for(let i = 0; i < files.length; i++){
      thumbnail = this.dbx.filesGetThumbnailBatch({  
        entries: [{  
          path: files[i].path_display,  
          size: 'w32h32',  
          format: 'jpeg',  
        }]  
    });
    this.thumbnails.push(thumbnail)
    }
  }
  
/* 
  getStylistData(id){
    this.dbx.filesListFolder({  
      path: ''  
    }).then(response => console.log(response))
  } */

  

  get Auth(){
    return this.auth;
  }

  set Auth(auth) {
    this.auth = auth;
  }

}
