import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {
  inputValue = 'This is the value original in binding';

  constructor() {
  }

  ngOnInit(): void {
  }

  displayInputValue() {

  }
}
