import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, isCurrency: boolean = false, decPointer: string, isPrefix:boolean = true): string {
    if (!isNaN(value)) {
      var currencyText = (isCurrency ? 'ZAR' : 'R');


      var decimalPipe = new DecimalPipe('en-IN');
      var InitialResult = decimalPipe.transform(value, decPointer);

      if (!isPrefix)
          return InitialResult + ' ' + currencyText;

      return currencyText + ' ' + InitialResult;

  }
  }

}
