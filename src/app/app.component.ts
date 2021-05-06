import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '@app/store/app-store.module';
import { OpenSnackBar } from '@app/store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-ideas';

  constructor(private store: Store<AppState>) {}

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
}
