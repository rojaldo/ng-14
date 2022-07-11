import { Component, OnInit } from '@angular/core';
import { HeroForm } from 'src/app/models/heroform';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  newHero = new HeroForm('', '', 0)

  // from 3 to 10 characters
  regexName = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{3,10}$/;

  regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  regexPostalCode = /^[0-9]{5}$/;

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { 
    this.submitted = true; 
    console.log(this.newHero);    
    this.removeHero();
  }

  removeHero() {
    this.newHero = new HeroForm('', '', 0);
  }


}
