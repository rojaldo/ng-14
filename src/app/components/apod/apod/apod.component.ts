import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apodData: any = {};

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    this.service.data$.subscribe(data => this.apodData = data);
    this.service.getApod();
  }

}
