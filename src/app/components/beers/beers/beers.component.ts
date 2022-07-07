import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { Order } from 'src/app/models/order';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers: Beer[] = [];
  filteredBeers: Beer[] = [];

  selection: any = {
    order: Order.ALPHABETICAL,
    ascendent: true,
    minValue: 4,
    maxValue: 6
  }

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

  handleChange(selection: any) {
    this.selection = selection;
    this.getFilteredBeers();
  }



}
