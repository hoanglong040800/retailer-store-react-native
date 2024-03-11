import { useState } from 'react';
import { Snackbar as PaperSnackbar } from 'react-native-paper';

type Props = {
  title: string;
};

const Snackbar = ({ title }: Props) => {
  const DURATION = 5000;

  const [visible, setVisible] = useState(false);

  const handleDismiss = () => {
    setVisible(false);
  };

  return (
    <PaperSnackbar visible={visible} onDismiss={handleDismiss} duration={DURATION}>
      {title}
    </PaperSnackbar>
  );
};

export default Snackbar;
