import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { Order } from 'src/app/models/order';
import { SharedDataService } from 'src/app/services/shared-data.service';

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

  max = 0;
  
  constructor(private dataService: SharedDataService) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.max = this.dataService.max;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['beers'] || changes['selection']) {
      this.filteredBeers = this.getFilteredBeers();
    }
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }


  getFilteredBeers(): Beer[] {

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
