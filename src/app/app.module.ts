import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from '@app/shared/app-material.module';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ApiService, AuthService } from '@app/services';
import { AppStoreModule } from '@app/store/app-store.module';
import { AuthModule } from '@app/auth/auth.module';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    AppStoreModule,
    AuthModule,
  ],
  providers: [AuthService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
