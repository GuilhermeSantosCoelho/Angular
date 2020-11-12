import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOuver(){
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow')*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white')*/
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() { }

}
