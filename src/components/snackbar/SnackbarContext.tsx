import { createContext } from 'react';
import { TSnackbar } from 'types';

export const snackbarInitialState: TSnackbar = {
  visible: false,
  title: '',
  type: 'success',
};

export const SnackbarCxt = createContext<TSnackbar>(snackbarInitialState);
