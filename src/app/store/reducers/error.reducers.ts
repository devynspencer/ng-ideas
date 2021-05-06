import { ErrorActionTypes, ErrorAction } from '@app/store/actions';

export interface ErrorState {
  error: any;
}

const initialErrorState: ErrorState = {
  error: null,
};

export const errorReducer: (
  state: ErrorState,
  action: ErrorAction
) => ErrorState = (state = initialErrorState, action: ErrorAction) => {
  switch (action.type) {
    case ErrorActionTypes.ADD_ERROR:
      return { ...state, error: action.payload };

    case ErrorActionTypes.REMOVE_ERROR:
      return { ...state, error: null };

    default:
      return state;
  }
};
