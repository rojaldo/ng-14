import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { BeersService } from 'src/app/services/beers.service';

enum Order {
  ALPHABETICAL,
  ABV,
}

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers: Beer[] = [];
  filteredBeers: Beer[] = [];

  minValue: number = 4;
  maxValue: number = 6;
  options: Options = {
    floor: 0,
    ceil: 60,
    step: 0.1,
  };

  ascendent = true;
  order = Order.ALPHABETICAL;
  orderStr = 'Alphabetical';
  ascendentStr = 'Ascendent';

  counter = 0;

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    this.service.beers$.subscribe(beers => {
      this.beers = beers;
      this.getFilteredBeers();
    })
    this.service.getBeers();
  }

  getFilteredBeers() {
    console.log('getFilteredBeers: ' + this.counter);
    this.counter++;

    this.filteredBeers =
      this.beers
        .filter(beer => beer.abv >= this.minValue && beer.abv <= this.maxValue)
        .sort((a, b) => {
          switch (this.order) {
            case Order.ALPHABETICAL:
              if (this.ascendent) {
                return a.name.localeCompare(b.name);
              } else {
                return b.name.localeCompare(a.name);
              }
            case Order.ABV:
              if (this.ascendent) {
                return a.abv - b.abv;
              } else {
                return b.abv - a.abv;
              }
          }
        });

  }

  handleChange() {
    this.getFilteredBeers();
  }

  handleOrder(order: Order) {
    switch (order) {
      case Order.ALPHABETICAL:
        this.order = Order.ALPHABETICAL;
        this.orderStr = 'Alphabetical';
        break;
      case Order.ABV:
        this.order = Order.ABV;
        this.orderStr = 'ABV';
        break;
    }
    this.getFilteredBeers();

  }

  handleAscendent(asc: boolean) {
    this.ascendent = asc;
    this.ascendentStr = asc ? 'Ascendent' : 'Descendent';
    this.getFilteredBeers();

  }


}
