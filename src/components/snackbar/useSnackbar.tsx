import { useContext } from 'react';
import { SnackbarType } from 'types';
import { SnackbarDpCxt } from './SnackbarDispatchContext';

export const useSnackbar = () => {
  const dispatch = useContext(SnackbarDpCxt);

  const openSnackbar = (type: SnackbarType, title: string) => {
    dispatch({ type: 'open', state: { type, title } });
  };

  const closeSnackbar = () => {
    dispatch({ type: 'close' });
  };

  return { openSnackbar, closeSnackbar };
};
