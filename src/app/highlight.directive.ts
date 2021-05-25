import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

 constructor(private elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = "maroon";
   }


   @HostListener('mouseenter') onMouseEnter(){
     this.highlight('red');
   }

   private highlight(color: string){
     this.elem.nativeElement.style.backgroundColor = color;

   }

}
