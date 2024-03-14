/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import InputError from './InputError';

type Props = {
  control: Control<any>;
  errors: FieldErrors<any>;
  label: string;
  name: string;
};

const DeTextInput = ({ control, errors, label, name }: Props) => {
  return (
    <View>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            label={label}
            onChangeText={onChange}
            // add empty text to avoid changing uncontrolled -> controlled which caused by value changing undefined -> define
            value={value || ''}
          />
        )}
      />

      <InputError errors={errors} name={name} />
    </View>
  );
};

export default DeTextInput;
