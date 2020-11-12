import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOuver(){
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow')*/
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white')*/
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
