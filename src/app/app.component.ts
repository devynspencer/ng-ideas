import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '@app/store/app-store.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OpenSnackBar } from '@app/store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-ideas';

  constructor(
    private store: Store<AppState>,
    private snackBarService: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.error)
      .subscribe((val) => {
        this.store.dispatch(
          new OpenSnackBar({
            message: val.error?.message,
            action: `Error ${val.error?.code}`,
          })
        );
      });
  }

  showError(err): void {
    if (err) {
      this.snackBarService.open(
        err.error?.message.substring(0, 47),
        `Error ${err.error?.code}`
      );
    }
  }
}
