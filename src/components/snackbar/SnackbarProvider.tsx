import { useReducer } from 'react';
import { Snackbar, useSnackbar, SnackbarCxt, snackbarInitialState, SnackbarDpCxt, snackbarReducer } from '.';

const GlobalSnackbar = () => {
  const { state, closeSnackbar } = useSnackbar();
  return <Snackbar visible={state.visible} title={state.title} onDismiss={closeSnackbar} />;
};

type Props = {
  children: JSX.Element;
};

const SnackbarProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(snackbarReducer, snackbarInitialState);

  return (
    <SnackbarCxt.Provider value={state}>
      <SnackbarDpCxt.Provider value={dispatch}>
        {children}

        <GlobalSnackbar />
      </SnackbarDpCxt.Provider>
    </SnackbarCxt.Provider>
  );
};

export default SnackbarProvider;
