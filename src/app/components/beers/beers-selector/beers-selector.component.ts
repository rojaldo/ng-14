import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/models/order';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-beers-selector',
  templateUrl: './beers-selector.component.html',
  styleUrls: ['./beers-selector.component.scss']
})
export class BeersSelectorComponent implements OnInit {

  @Output() onSelection = new EventEmitter<any>();

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


  constructor(private dataService: SharedDataService) { }

  ngOnInit(): void {
    this.options.ceil = this.dataService.max;
  }

  handleChange() {
    this.onSelection.emit(
      {
        order: this.order,
        ascendent: this.ascendent,
        minValue: this.minValue,
        maxValue: this.maxValue
      }
    );
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
    this.handleChange()

  }

  handleAscendent(asc: boolean) {
    this.ascendent = asc;
    this.ascendentStr = asc ? 'Ascendent' : 'Descendent';
    this.handleChange();
  }


}
