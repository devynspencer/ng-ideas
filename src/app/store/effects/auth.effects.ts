import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap, map, tap } from 'rxjs/operators';

import { AuthService } from '@app/services/auth.service';
import {
  AuthActionTypes,
  LoginUser,
  RegisterUser,
  SetCurrentUser,
  SetInitialUser,
} from '@app/store/actions/auth.actions';
import { AddError, RemoveError } from '@app/store/actions/error.actions';
import { AppState } from '@app/store/app-store.module';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  @Effect()
  setInitialUser$: Observable<Action> = this.action$.pipe(
    ofType<SetInitialUser>(AuthActionTypes.SET_INITIAL_USER),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap((action: SetInitialUser) =>
      this.authService.whoami().pipe(
        map((user) => new SetCurrentUser(user)),
        catchError((err) => of(new AddError(err)))
      )
    )
  );

  @Effect()
  loginUser$: Observable<Action> = this.action$.pipe(
    ofType<LoginUser>(AuthActionTypes.LOGIN_USER),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap((action: LoginUser) =>
      this.authService.login(action.payload).pipe(
        map((user) => new SetCurrentUser(user)),
        catchError((err) => of(new AddError(err)))
      )
    )
  );

  @Effect()
  registerUser$: Observable<Action> = this.action$.pipe(
    ofType<RegisterUser>(AuthActionTypes.REGISTER_USER),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap((action: RegisterUser) =>
      this.authService.register(action.payload).pipe(
        map((user) => new SetCurrentUser(user)),
        catchError((err) => of(new AddError(err)))
      )
    )
  );
}
