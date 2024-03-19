import { useReducer } from 'react';
import { TSnackbar } from 'types';
import { Snackbar, SnackbarDpCxt, snackbarReducer } from '.';

const initialState: TSnackbar = {
  visible: false,
  title: '',
  type: 'success',
};

type Props = {
  children: JSX.Element;
};

const SnackbarProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(snackbarReducer, initialState);

  const handleDismiss = () => {
    dispatch({ type: 'close' });
  };

  return (
    <SnackbarDpCxt.Provider value={dispatch}>
      {children}

      <Snackbar visible={state.visible} title={state.title} onDismiss={handleDismiss} />
    </SnackbarDpCxt.Provider>
  );
};

export default SnackbarProvider;
