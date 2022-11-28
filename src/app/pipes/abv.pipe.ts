import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abv'
})
export class AbvPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {    
    if(args){
      if(args[0] === '.') {
        return value.toString() + '%';
      }
    }
    // transform x.y to x,y%
    return value.toString().replace('.', ',') + '%';
  }

}
