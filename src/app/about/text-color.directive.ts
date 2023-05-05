import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'blue';
  }

}