import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyStyle]', // class , Id ?
  // <app-contact-us appMyStyle>
})
export class MyStyleDirective {
  constructor(private elementRef: ElementRef) {
    // elementRef.nativeElement.style.color = 'red';
    elementRef.nativeElement.style.textShadow = '2px 2px 3px red';
  }
}

/*

<img src="../abc.png"/ class='abc' />

<p class='abc' > text </p>

<div id='demo' > data </div>

*/

// document.getElementById('demo').style.color = 'red';

// <p></p>  : tag
// <p> text </p> : Element
// <p>            : node
//      <i>text </i>
// </p>
