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
  private _apiLoaded = false;
  currentDate: any = {}

  constructor() { }

  ngOnInit(): void {
    if (!this._apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this._apiLoaded = true;
    }

  }

  handleDate(date: any) {
    console.log(date);
    this.currentDate = date;
    // this.service.getApod(date.year + '-' + date.month + '-' + date.day);
  }

}
