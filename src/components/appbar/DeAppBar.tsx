import { Appbar, Button } from 'react-native-paper';

type Props = {
  title: string;
  primaryText: string;
  onPressSecondary: () => void;
  onPressPrimary: () => void;
};

const DeAppBar = ({ title, primaryText, onPressSecondary, onPressPrimary }: Props) => {
  return (
    <Appbar.Header>
      <Appbar.Action icon="close" onPress={onPressSecondary} />
      <Appbar.Content title={title} />
      <Button onPress={onPressPrimary}>{primaryText}</Button>
    </Appbar.Header>
  );
};

export default DeAppBar;
