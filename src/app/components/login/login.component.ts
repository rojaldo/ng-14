import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log('login');
    this.service.login();
    this.router.navigate(['/beers']);
  }

}
