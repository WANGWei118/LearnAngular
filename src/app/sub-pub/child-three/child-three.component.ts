import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SubscribeService} from '../../service/subscribe.service';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit, OnDestroy  {

  msgSub: Subscription;
  message: any = null;

  constructor(private subscribeService: SubscribeService) {
  }

  ngOnInit(): void {
    this.msgSub = this.subscribeService.message$.subscribe(msg => {
      this.message = msg;
    });
  }

  sendMessage() {
    this.subscribeService.getMessage('Message from child three');
  }

  ngOnDestroy(): void {
    this.msgSub.unsubscribe();
  }
}
