import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SubscribeService} from '../../service/subscribe.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit, OnDestroy {

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
    this.subscribeService.getMessage('Message from child two');
  }

  ngOnDestroy(): void {
    this.msgSub.unsubscribe();
  }
}
