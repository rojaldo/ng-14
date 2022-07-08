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

  selection: any = {
    order: Order.ALPHABETICAL,
    ascendent: true,
    minValue: 4,
    maxValue: 6
  }


  constructor(public service: BeersService) { }

  ngOnInit(): void {
    this.service.beers$.subscribe(beers => {
      this.beers = beers;
    })
    this.service.getBeers();
  }

  
  handleChange(selection: any) {
    this.selection = selection;
  }



}
