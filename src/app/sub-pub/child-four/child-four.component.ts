import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubscribeService} from '../../service/subscribe.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-child-four',
  templateUrl: './child-four.component.html',
  styleUrls: ['./child-four.component.css']
})
export class ChildFourComponent implements OnInit, OnDestroy {

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
    this.subscribeService.getMessage('Message from child four');
  }

  ngOnDestroy(): void {
    this.msgSub.unsubscribe();
  }
}
