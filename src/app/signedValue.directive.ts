import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSignedValue]'
})
export class SignedValueDirective {

  constructor(private elRef: ElementRef) {}
   }


