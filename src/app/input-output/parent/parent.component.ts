import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  messageFromChild: any = null;
  sendMessageToChild: any = null;
  index = 1;

  constructor() { }

  ngOnInit(): void {
  }


  receiveMessageFromChild($event: any) {
    this.messageFromChild = $event;
  }

  sendMessageToChildEvent() {
    this.sendMessageToChild =  'Message ' + this.index + ' : ' + 'Hello Child, I am Parent';
    this.index ++;
  }
}
