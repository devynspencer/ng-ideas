import { Action } from '@ngrx/store';

import { AuthDto, User } from '@app/models';

export enum AuthActionTypes {
  LOGIN_USER = '[AUTH] Login user',
  REGISTER_USER = '[AUTH] Register user',
  SET_CURRENT_USER = '[AUTH] Set current user',
  SET_INITIAL_USER = '[AUTH] Set initial user',
}

export class LoginUser implements Action {
  readonly type = AuthActionTypes.LOGIN_USER;
  constructor(public payload: AuthDto) {}
}

export class RegisterUser implements Action {
  readonly type = AuthActionTypes.REGISTER_USER;
  constructor(public payload: AuthDto) {}
}

export class SetCurrentUser implements Action {
  readonly type = AuthActionTypes.SET_CURRENT_USER;
  constructor(public payload: User) {}
}

export class SetInitialUser implements Action {
  readonly type = AuthActionTypes.SET_INITIAL_USER;
}

export type AuthAction =
  | LoginUser
  | RegisterUser
  | SetCurrentUser
  | SetInitialUser;
