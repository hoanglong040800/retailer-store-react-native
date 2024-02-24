import { DeTextInput } from 'components';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-paper';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CreateTodoForm } from './todo.interface';

const schema = yup.object().shape({
  title: yup.string().required().max(50),
  description: yup.string().max(200),
});

const CreateTodoContent = () => {
  const { control, handleSubmit } = useForm<CreateTodoForm>({ resolver: yupResolver<CreateTodoForm>(schema) });

  const onValidSubmit = (formData: CreateTodoForm) => {
    console.log(formData);
  };

  const onInvalidSubmit = () => {
    // TODO show snackbar
  };

  return (
    <form onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}>
      <DeTextInput control={control} name="title" label="Title" />

      <DeTextInput control={control} name="description" label="Description" />

      <Button onPress={handleSubmit(onValidSubmit, onInvalidSubmit)}>Submit</Button>
    </form>
  );
};

export default CreateTodoContent;
