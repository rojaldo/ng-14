import { Component, OnInit } from '@angular/core';
import { Apod } from 'src/app/models/apod';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod!: Apod;

  apiLoaded = false;

  selectedDate = {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()};

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.service.apod$.subscribe(value => {
      this.apod = value
    });
    this.service.getApod();
  }

  handleDateChange() {
    console.log(this.selectedDate);
    // get string from date
    let strDate = this.selectedDate.year + '-' + this.selectedDate.month + '-' + this.selectedDate.day;
    this.service.getApod(strDate);
    
  }


}
