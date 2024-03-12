import { Dispatch, createContext, useContext, useReducer } from 'react';
import { TSnackbar } from 'types';
import Snackbar from './Snackbar';

type Action = {
  type: 'open' | 'close';
  state?: TSnackbar;
};

const initialState: TSnackbar = {
  visible: false,
  title: '',
  type: 'success',
};

const reducer = (state: TSnackbar, action: Action): TSnackbar => {
  switch (action.type) {
    case 'open':
      return { ...action.state, visible: true };

    case 'close':
      return { ...state, visible: false };

    default:
      return state;
  }
};

const SnackbarCxt = createContext<TSnackbar>(initialState);
const SnackbarDpCxt = createContext<Dispatch<Action>>(null);

type Props = {
  children: JSX.Element;
};

const Component = () => {
  const state = useContext(SnackbarCxt);
  const dispatch = useContext(SnackbarDpCxt);

  const handleDismiss = () => {
    dispatch({ type: 'close' });
  };

  return <Snackbar visible={state.visible} title={state.title} onDismiss={handleDismiss} />;
};

const SnackbarProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SnackbarCxt.Provider value={state}>
      <SnackbarDpCxt.Provider value={dispatch}>
        {children}

        <Component />
      </SnackbarDpCxt.Provider>
    </SnackbarCxt.Provider>
  );
};

export { SnackbarDpCxt, SnackbarProvider };
