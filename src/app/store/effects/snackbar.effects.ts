import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import {
  CloseSnackBar,
  OpenSnackBar,
  SnackBarActionTypes,
  SnackBarPayload,
} from '@app/store/actions/snackbar.actions';

@Injectable()
export class SnackBarEffects {
  constructor(private action$: Actions, private snackBar: MatSnackBar) {}

  @Effect()
  openSnackBar: Observable<any> = this.action$.pipe(
    ofType<OpenSnackBar>(SnackBarActionTypes.OPEN_SNACKBAR),
    map((action: OpenSnackBar) => action.payload),
    tap((payload: SnackBarPayload) =>
      this.snackBar.open(payload.action, payload.message, payload.config)
    ),
    delay(2000),
    map(() => new CloseSnackBar())
  );

  @Effect({ dispatch: false })
  closeSnackBar: Observable<any> = this.action$.pipe(
    ofType<CloseSnackBar>(SnackBarActionTypes.CLOSE_SNACKBAR),
    tap(() => this.snackBar.dismiss())
  );
}
