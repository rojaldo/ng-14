import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abv'
})
export class AbvPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let max: number;    
    typeof args[0] === 'number' && args[0] > 0 && args[0] < 100? max = args[0] : max = 100;
    if(typeof value === 'number' && value > 0 && value < max) {
      let integer = Math.floor(value);
      let decimal = value - integer;
      let decimalInteger = (decimal * 10).toFixed(0);
      return integer + ',' + decimalInteger + '%';
    }else {
      console.error('AbvPipe: value is not a number: ' + value);
      return value;
    }
  }

}
