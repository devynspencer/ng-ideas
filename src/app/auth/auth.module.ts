import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '@app/shared/app-material.module';
import { AuthComponent } from '@app/auth/auth.component';

@NgModule({
  imports: [AppMaterialModule, ReactiveFormsModule],
  declarations: [AuthComponent],
  exports: [AuthComponent],
})
export class AuthModule {}
