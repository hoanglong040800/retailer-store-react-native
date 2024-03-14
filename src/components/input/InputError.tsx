/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldErrors } from 'react-hook-form';
import { Text } from 'react-native-paper';

type Props = {
  errors: FieldErrors<any>;
  name: string;
};

const InputError = ({ name, errors }: Props) => {
  return (
    <Text variant="labelMedium" style={{ color: 'red' }}>
      {(errors?.[name]?.message as string) || ''}
    </Text>
  );
};

export default InputError;
