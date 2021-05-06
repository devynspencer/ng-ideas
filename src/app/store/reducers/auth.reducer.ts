import { User } from '@app/models';
import { AuthAction, AuthActionTypes } from '@app/store/actions/auth.actions';

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

export const authReducer: (
  state: AuthState,
  action: AuthAction
) => AuthState = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_USER:
      return { ...state };

    case AuthActionTypes.REGISTER_USER:
      return { ...state };

    case AuthActionTypes.SET_INITIAL_USER:
      return { ...state };

    case AuthActionTypes.SET_CURRENT_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
