import {
  SnackBarAction,
  SnackBarActionTypes,
} from '@app/store/actions/snackbar.actions';

export interface SnackBarState {
  show: boolean;
}

const initialState: SnackBarState = {
  show: false,
};

export const snackBarReducer: (
  state: SnackBarState,
  action: SnackBarAction
) => SnackBarState = (state = initialState, action: SnackBarAction) => {
  switch (action.type) {
    case SnackBarActionTypes.OPEN_SNACKBAR:
      return { ...state, show: true };

    case SnackBarActionTypes.CLOSE_SNACKBAR:
      return { ...state, show: false };

    default:
      return state;
  }
};
