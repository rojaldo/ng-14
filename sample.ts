import { waitForAsync } from '@angular/core/testing';
import { of, from, iif, empty } from 'rxjs';
import { map, reduce, filter, delay, isEmpty, count } from 'rxjs/operators';

let year = 1990;
let year$ = of(year);
year$.pipe(
    filter(y => y % 4 === 0 && y % 100 !== 0 || y % 400 === 0),
    count()
).subscribe(y => console.log(y));
