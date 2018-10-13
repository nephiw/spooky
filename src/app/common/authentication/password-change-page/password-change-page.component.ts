import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'bc-password-change-page',
  templateUrl: './password-change-page.component.html',
  styleUrls: ['./password-change-page.component.less']
})
export class PasswordChangePageComponent implements OnInit {
  public changeForm: FormGroup;

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.changeForm = new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      newPassword1: new FormControl('', Validators.required),
      newPassword2: new FormControl('', Validators.required)
    });
  }

  public changePassword(): void {
    const { oldPassword, newPassword1 } = this.changeForm.value;

    this.auth.changePassword(oldPassword, newPassword1).then(() => {
      return this.router.navigate(['admin']);
    });
  }
}
