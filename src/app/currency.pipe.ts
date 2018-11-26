import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, isCurrency: boolean = false, decPointer: string, isPrefix:boolean = true): string {
    if (!isNaN(value)) {
      const currencyText = (isCurrency ? 'true' : 'R');
      const decimalPipe = new DecimalPipe('en-IN');
      const InitialResult = decimalPipe.transform(value, decPointer);

      if (!isPrefix) {
              return InitialResult + ' ' + currencyText;
      } else {
        return currencyText + ' ' + InitialResult;
      }
  }
  }

}
