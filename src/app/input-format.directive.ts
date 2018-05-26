import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[InputFormat]'
})
export class InputFormatDirective {

  constructor(private el:ElementRef) { }
  
  //To let consumers define their own format, define an input field
  @Input('InputFormat') format;

  // After the user moves away from text input field
  // add the required logic business based on whats keyed in
  @HostListener('blur') onBlur(){
    let inputValue:string=this.el.nativeElement.value;
    if(this.format=='lowercase')
      this.el.nativeElement.value= inputValue.toLowerCase();
    else
      this.el.nativeElement.value= inputValue.toUpperCase();}
  }
}
