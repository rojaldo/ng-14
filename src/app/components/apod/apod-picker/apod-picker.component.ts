import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apod-picker',
  templateUrl: './apod-picker.component.html',
  styleUrls: ['./apod-picker.component.scss']
})
export class ApodPickerComponent implements OnInit {

  @Output() onDateSelected = new EventEmitter<any>();

  selectedDate = this.calendar.getToday();

  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
  }

  sendDate(value: any) {
    this.onDateSelected.emit(value);
  }

}
