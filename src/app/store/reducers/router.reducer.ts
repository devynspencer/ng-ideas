import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';

export class CustomSerializer implements fromRouter.RouterStateSerializer<AppRouterState> {
  serialize(routerState: RouterStateSnapshot) {
    const { url, root: { queryParams } } = routerState;
    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) {
      state = state.firstChild;
    }

    const { params } = state;

    return { url, queryParams, params };
  }
}
