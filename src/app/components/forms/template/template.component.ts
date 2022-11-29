import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  user!: User;
  // name between 2 and 10 characters
  namePattern = '^[a-zA-ZñÑçÇáéíóú]{2,10}$';
  constructor() { }
  ngOnInit() {
      this.user = new User('', '');
  }
  submitForm(form: any): void {
      console.log('Form Data: ');
      console.log(form);
      // user.firstName = form.firstName
  }
}
