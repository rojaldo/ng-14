import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { map, Observable, of } from 'rxjs';
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
      this.getFilteredBeers().subscribe(beers => {
        this.filteredBeers = beers;
      }
);
    }
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }


  getFilteredBeers(): Observable<Beer[]> {

    return of(this.beers).pipe(
      map((beers: Beer[]) => {
        return beers.filter(b => b.abv >= this.selection.minValue && b.abv <= this.selection.maxValue);
      }
      ),
      map(beers => {
        if(this.selection.order === Order.ALPHABETICAL) {
          return beers.sort((a, b) => {
            if(this.selection.ascendent) {
              return a.name.localeCompare(b.name);
            } else {
              return b.name.localeCompare(a.name);
            }
          });
        } else {
          return beers.sort((a, b) => {
            if(this.selection.ascendent) {
              return a.abv - b.abv;
            } else {
              return b.abv - a.abv;
            }
          });
        }
      }
      )
    );
  }


}
