import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Shadow]'
})
export class ShadowDirective {

  constructor(private element: ElementRef) { 

    this.element.nativeElement.style.boxShadow="0 0 10px #999";
    this.element.nativeElement.style.borderRadius="5px";
    this.element.nativeElement.style.transition="all .5s"
    
  }

  @HostListener('mouseover') over()
  {

    this.element.nativeElement.style.boxShadow="0 0 10px red";

  }
  
  @HostListener('mouseout') out()
  {

    this.element.nativeElement.style.boxShadow="0 0 10px #999";

  }
}
