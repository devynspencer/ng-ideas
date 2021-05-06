import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '@app/store/app-store.module';
import { validateNotWhitespace } from '@app/shared/utilities/validators';
import { LoginUser, OpenSnackBar, RegisterUser } from '@app/store/actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      username: this.fb.control('', [
        Validators.required,
        validateNotWhitespace,
      ]),
      password: this.fb.control('', [
        Validators.required,
        validateNotWhitespace,
      ]),
    });
  }

  login(): void {
    const val = this.authForm.getRawValue();

    this.store.dispatch(new LoginUser(val));
  }

  register(): void {
    const val = this.authForm.getRawValue();

    this.store.dispatch(new RegisterUser(val));
  }
}
