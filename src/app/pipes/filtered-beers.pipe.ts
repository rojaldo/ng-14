import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from '../models/beer';

@Pipe({
  name: 'filteredBeers'
})
export class FilteredBeersPipe implements PipeTransform {

  transform(value: Beer[], ...args: number[]): Beer[] {
    console.log('filteredBeers');
    
    if(args.length === 2) {
      return value.filter(beer => {
        return beer.abv >= args[0] && beer.abv <= args[1];
      });
      // return error
    }
    console.error('filteredBeers pipe needs 2 arguments');
    return [];
  }

}
