import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AuthEffects, SnackBarEffects } from '@app/store/effects';
import {
  authReducer,
  AuthState,
  errorReducer,
  ErrorState,
  snackBarReducer,
  SnackBarState,
} from '@app/store/reducers';

export interface AppState {
  auth: AuthState;
  error: ErrorState;
  snackbarState: SnackBarState;
}

export const effects = [AuthEffects, SnackBarEffects];

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  error: errorReducer,
  snackbarState: snackBarReducer,
};

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
  ],
})
export class AppStoreModule {}
