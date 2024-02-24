import { Control, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  label: string;
  name: string;
};

const DeTextInput = ({ control, label, name }: Props) => {
  return (
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
  );
};

export default DeTextInput;
