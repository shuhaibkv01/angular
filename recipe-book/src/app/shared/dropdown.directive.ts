import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  //toggle: boolean = true;

  @HostBinding('class.open') isOpen = false;
  constructor(private elementRef: ElementRef, private renterer: Renderer2 ) { }

  @HostListener('click') toggleOpen() {
  //  if(this.toggle) {
  //     this.renterer.addClass(this.elementRef.nativeElement,'open');
  //   } else {
  //     this.renterer.removeClass(this.elementRef.nativeElement,'open');
  //   }
  //   this.toggle = !this.toggle;

    this.isOpen = !this.isOpen;
  }

  // @HostListener('mouseleave') toggleMouseLeave() {
  //   this.isOpen = !this.isOpen;
  // }

}
