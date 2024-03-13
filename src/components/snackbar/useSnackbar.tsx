import { useContext } from 'react';
import { SnackbarType } from 'types';
import { SnackbarCxt } from './SnackbarContext';
import { SnackbarDpCxt } from './SnackbarDispatchContext';

export const useSnackbar = () => {
  const state = useContext(SnackbarCxt);
  const dispatch = useContext(SnackbarDpCxt);

  const openSnackbar = (type: SnackbarType, title: string) => {
    dispatch({ type: 'open', state: { type, title } });
  };

  const closeSnackbar = () => {
    dispatch({ type: 'close' });
  };

  return { state, openSnackbar, closeSnackbar };
};
