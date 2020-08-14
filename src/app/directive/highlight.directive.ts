import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  @HostListener('click') onClick() {
    window.alert('Clicked event from highlight Directive');
  }

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.style.fontWeight = 'bold';
    el.nativeElement.style.fontSize = '50px';
  }

}
