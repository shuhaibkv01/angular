import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  // @HostBinding('style.backgroundColor') backgroundColor: string = 'grey';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {
   // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','green');
   this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseover') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','yellow');
    //this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
  } 

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','blue');
   // this.backgroundColor = 'green';
   this.backgroundColor = this.defaultColor;
  } 
}
