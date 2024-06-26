import { StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';

type Props = {
  children: React.ReactNode;
};

const BottomButtonWrapper = ({ children }: Props) => {
  return (
    <Surface elevation={2} style={styles.container}>
      {children}
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 8,
  },
});

export default BottomButtonWrapper;
