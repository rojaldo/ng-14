import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  validFirstName = false;
  validLastName = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // check firstname is valid

  }
  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-ZñÑçÇáéíóú]{2,10}$')]],
    lastName: ['',[Validators.required]],
  });


  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
