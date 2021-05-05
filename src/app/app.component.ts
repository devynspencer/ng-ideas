import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '@app/store/app-store.module';
import { LoginUser } from './store/actions/auth.actions';
import { AuthDto } from './models/auth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-ideas';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoginUser({ username: 'username', password: 'password' } as AuthDto));
  }
}
