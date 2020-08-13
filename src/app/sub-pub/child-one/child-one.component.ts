import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubscribeService} from '../../service/subscribe.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit, OnDestroy {

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
    this.subscribeService.getMessage('Message from child one');
  }

  ngOnDestroy(): void {
    this.msgSub.unsubscribe();
  }
}
