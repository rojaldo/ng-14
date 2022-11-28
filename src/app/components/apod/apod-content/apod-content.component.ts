import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Apod } from 'src/app/models/apod';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod-content',
  templateUrl: './apod-content.component.html',
  styleUrls: ['./apod-content.component.scss']
})
export class ApodContentComponent implements OnInit, OnChanges {

  @Input() apodData: Apod = new Apod();
  // init as today
  @Input() date: any = this.calendar.getToday();

  constructor(private service: ApodService, private calendar: NgbCalendar) { }


  ngOnInit(): void {
    this.service.data$.subscribe(data => this.apodData = new Apod(data));
    this.service.getApod();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes:' + JSON.stringify(changes['date']));
    
    if (changes['date']) {
      if (changes['date'].currentValue.year && changes['date'].currentValue.month && changes['date'].currentValue.day) {
        this.service.getApod(changes['date'].currentValue.year + '-' + changes['date'].currentValue.month + '-' + changes['date'].currentValue.day);
      } 
    }

  }

}
