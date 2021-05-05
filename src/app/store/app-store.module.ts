import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { errorReducer, ErrorState } from '@app/store/reducers/error.reducers';

export interface AppState {
  error: ErrorState;
}

export const reducers: ActionReducerMap<AppState> = {
  error: errorReducer,
};

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
  ],
})
export class AppStoreModule { }
