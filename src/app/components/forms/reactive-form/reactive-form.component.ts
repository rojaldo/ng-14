import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  myValidator(control: any) {
    // cheack if the control.value lowercase is in countries
    if (control.value !== null) {
      if (this.countries.indexOf(control.value.toLowerCase()) === -1) {
        return { error: 'error' };
      }
      return null;
    }
    return null;
  }

  countries: string[] = [];

  namePattern = '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{3,10}$';
  emailPattern = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$';
  postalCodePattern = '^[0-9]{5}$';

  heroForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.namePattern)]],
    description: [''],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    postalCode: ['', [Validators.required, Validators.pattern(this.postalCodePattern)]],
    country: ['', [Validators.required, (control: any) => this.myValidator(control)]],
  });



  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: CountryService) { }

  ngOnInit(): void {
    console.log('reactiveForm init');
    console.log(this.route.snapshot.paramMap.get('id'));
    this.service.countries$.subscribe(myCountries => {
      this.countries = myCountries;
    });
    this.service.getCountries()

  }

  onSubmit() {
    console.log(this.heroForm.value);
    this.heroForm.reset();
  }

}

