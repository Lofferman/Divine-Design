import { Injectable } from '@angular/core';
import { Dropbox } from 'dropbox';
import { EventEmitter } from 'protractor';
import { BehaviorSubject } from 'rxjs';

const accessToken = 'mV9pKbDM0MAAAAAAAAAAKAJZQPZ62X7MW-DNW3sCjIJR1_mbuWyVcjQPUqeYw9Ws';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {
  public auth: any;

  public scrollObj = new BehaviorSubject<any>({});

  constructor() {}

  setScrollObj(scrollObj) {
    this.scrollObj.next(scrollObj)
  }

  getOAuth(){
 
  }

  get Auth(){
    return this.auth;
  }

  set Auth(auth) {
    this.auth = auth;
  }

}
