import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bc-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.less']
})
export class AuthenticationPageComponent implements OnInit {
  public authenticationForm: FormGroup;

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authenticationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  public login(): void {
    this.auth.login(this.authenticationForm.value).then(() => {
      return this.router.navigate(['admin']);
    });
  }

  public logout(): void {
    this.auth.logout();
  }
}
