import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive(
    {
        selector: '[appBasicHighlight]'
    }
)
export class BasicHighlightDirective implements OnInit {

    constructor(private elemenetRef: ElementRef) {

    }

    ngOnInit() {
        this.elemenetRef.nativeElement.style.backgroundColor = 'red';
    }

}