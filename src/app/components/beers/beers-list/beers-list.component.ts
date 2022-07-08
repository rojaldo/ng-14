import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss']
})
export class BeersListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() beers: Beer[] = [];
  @Input() selection: any = {
    order: Order.ALPHABETICAL,
    ascendent: true,
    minValue: 4,
    maxValue: 6
  };

  filteredBeers: Beer[] = [];
  
  counter = 0;

  constructor() { }


  ngOnInit(): void {
    console.log('ngOnInit');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
    if(changes['beers'] || changes['selection']) {
      this.filteredBeers = this.getFilteredBeers();
    }
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }


  getFilteredBeers(): Beer[] {
    console.log('getFilteredBeers: ' + this.counter);
    this.counter++;

    return this.beers
        .filter(beer => beer.abv >= this.selection.minValue && beer.abv <= this.selection.maxValue)
        .sort((a, b) => {
          switch (this.selection.order) {
            case Order.ALPHABETICAL:
              if (this.selection.ascendent) {
                return a.name.localeCompare(b.name);
              } else {
                return b.name.localeCompare(a.name);
              }
            case Order.ABV:
              if (this.selection.ascendent) {
                return a.abv - b.abv;
              } else {
                return b.abv - a.abv;
              }
          }
          return 0;
        });

  }


}
