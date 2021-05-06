import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { Action } from '@ngrx/store';

export interface SnackBarPayload {
  message: string;
  action?: string;
  config?: MatSnackBarConfig;
}

export enum SnackBarActionTypes {
  OPEN_SNACKBAR = '[SNACKBAR] Open snackbar',
  CLOSE_SNACKBAR = '[SNACKBAR] Close snackbar',
}

export class OpenSnackBar implements Action {
  readonly type = SnackBarActionTypes.OPEN_SNACKBAR;
  constructor(public payload: SnackBarPayload) {}
}

export class CloseSnackBar implements Action {
  readonly type = SnackBarActionTypes.CLOSE_SNACKBAR;
}

export type SnackBarAction = OpenSnackBar | CloseSnackBar;
