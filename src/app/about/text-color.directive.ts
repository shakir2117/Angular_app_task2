import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

    constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'Green';
}
}
