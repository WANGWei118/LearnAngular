import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() messageFromParent: any = null;
  @Output() sendMessageToParentEvent = new EventEmitter();

  index = 1;

  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToParent(){
    this.sendMessageToParentEvent.emit('Message ' + this.index + ' : ' + 'Hello Parent, I am Child');
    this.index ++;
  }

}
