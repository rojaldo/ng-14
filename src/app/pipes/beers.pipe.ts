import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from '../models/beer';

@Pipe({
  name: 'beers'
})
export class BeersPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): Beer[] {

    return value;
  }

}
