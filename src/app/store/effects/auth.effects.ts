import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators';

import { AuthService } from '@app/services/auth.service';
import {
  AuthActionTypes,
  LoginUser,
  RegisterUser,
  SetCurrentUser,
  SetInitialUser,
} from '@app/store/actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private authService: AuthService) {}

  @Effect()
  setInitialUser$: Observable<Action> = this.action$.pipe(
    ofType<SetInitialUser>(AuthActionTypes.SET_INITIAL_USER),
    mergeMap((action: SetInitialUser) =>
      this.authService.whoami().pipe(
        map((user) => new SetCurrentUser(user)),
        catchError((err) => of(err))
      )
    )
  );

  @Effect()
  loginUser$: Observable<Action> = this.action$.pipe(
    ofType<LoginUser>(AuthActionTypes.LOGIN_USER),
    mergeMap((action: LoginUser) =>
      this.authService.login(action.payload).pipe(
        map((user) => new SetCurrentUser(user)),
        catchError((err) => of(err))
      )
    )
  );

  @Effect()
  registerUser$: Observable<Action> = this.action$.pipe(
    ofType<RegisterUser>(AuthActionTypes.REGISTER_USER),
    mergeMap((action: RegisterUser) =>
      this.authService.register(action.payload).pipe(
        map((user) => new SetCurrentUser(user)),
        catchError((err) => of(err))
      )
    )
  );
}
