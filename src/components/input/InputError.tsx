/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldErrors } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

type Props = {
  errors: FieldErrors<any>;
  name: string;
};

const InputError = ({ name, errors }: Props) => {
  return (
    <Text variant="labelMedium" style={styles.text}>
      {(errors?.[name]?.message as string) || ''}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
    height: 25,
  },
});

export default InputError;
