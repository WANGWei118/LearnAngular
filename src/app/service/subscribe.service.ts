import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  message = new Subject<any>();
  message$ = this.message.asObservable();

  constructor() { }

  getMessage(message){
    this.message.next(message);
  }
}
