import { Dispatch, createContext } from 'react';
import { TSnackbar } from 'types';

type Action = {
  type: 'open' | 'close';
  state?: TSnackbar;
};

export const snackbarReducer = (state: TSnackbar, action: Action): TSnackbar => {
  switch (action.type) {
    case 'open':
      return { ...action.state, visible: true };

    case 'close':
      return { ...state, visible: false };

    default:
      return state;
  }
};

export const SnackbarDpCxt = createContext<Dispatch<Action>>(null);
