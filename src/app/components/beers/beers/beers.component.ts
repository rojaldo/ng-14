import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers: Beer[] = [];
  showBeers: Beer[] = [];

  value: number = 4;
  highValue: number = 6;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    this.service.beers$.subscribe(data => {
      this.beers = data
      this.handleSlider();
    });
    this.service.getBeers();
  }

  handleSlider() {    
    this.showBeers = this.beers.filter(beer => {
      return beer.abv >= this.value && beer.abv <= this.highValue;
    });
  }

}
