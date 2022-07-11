import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = '';
  password = '';

  constructor(private service: AuthenticateService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if(this.service.login(this.login, this.password)) {
    this.router.navigate(['/heroes']);
    }else {
      alert('Invalid credentials');
    }
  }

}
