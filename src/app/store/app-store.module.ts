import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
  ],
  declarations: []
})
export class AppStoreModule { }
