import { Component, OnInit } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Apod } from 'src/app/models/apod';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apodData: Apod = new Apod();
  selectedDate = this.calendar.getToday();
  private _apiLoaded = false;

  constructor(private service: ApodService, private calendar: NgbCalendar) { }

  ngOnInit(): void {
    if (!this._apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this._apiLoaded = true;
    }
    this.service.data$.subscribe(data => this.apodData = new Apod(data));
    this.service.getApod();

  }

  onDateSelect(date: any) {
    console.log(date);
    this.service.getApod(date.year + '-' + date.month + '-' + date.day);
  }

}
