import { DeTextInput } from 'components';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-paper';

type CreateTodoForm = {
  title: string;
  description: string;
};

const CreateTodoContent = () => {
  const { control, handleSubmit } = useForm<CreateTodoForm>();

  const onValidSubmit = (formData: CreateTodoForm) => {
    console.log(formData);
  };

  const onErrorSubmit = () => {};

  return (
    <form onSubmit={handleSubmit(onValidSubmit, onErrorSubmit)}>
      <DeTextInput control={control} name="title" label="Title" />

      <DeTextInput control={control} name="description" label="Description" />

      <Button onPress={handleSubmit(onValidSubmit, onErrorSubmit)}>Submit</Button>
    </form>
  );
};

export default CreateTodoContent;
