import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { errorReducer, ErrorState } from '@app/store/reducers/error.reducers';
import { authReducer, AuthState } from '@app/store/reducers/auth.reducer';
import { AuthEffects } from '@app/store/effects/auth.effects';
import { SnackBarEffects } from '@app/store/effects/snackbar.effects';
import {
  snackBarReducer,
  SnackBarState,
} from '@app/store/reducers/snackbar.reducer';

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
