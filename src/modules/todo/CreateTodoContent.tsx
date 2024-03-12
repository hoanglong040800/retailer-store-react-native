import { useContext } from 'react';
import { object } from 'yup';
import { DeAppBar, DeTextInput, SnackbarDpCxt } from 'components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateTodoForm } from './todo.interface';
import { createTodoSchema } from './todo.schema';

type Props = {
  onClose: () => void;
};

const resolvedSchema = yupResolver(object(createTodoSchema));

const CreateTodoContent = ({ onClose }: Props) => {
  const snackDp = useContext(SnackbarDpCxt);

  const { control, handleSubmit } = useForm<CreateTodoForm>({ resolver: resolvedSchema });

  const onValidSubmit = (formData: CreateTodoForm) => {
    // TODO long.t call API
    console.log(formData);
  };

  const onInvalidSubmit = () => {
    snackDp({ type: 'open', state: { type: 'error', title: 'Create Todo content fail' } });
  };

  return (
    <>
      <DeAppBar
        title="Create Todo"
        primaryText="Save"
        onPressPrimary={handleSubmit(onValidSubmit, onInvalidSubmit)}
        onPressSecondary={onClose}
      />

      <DeTextInput control={control} name="title" label="Title" />

      <DeTextInput control={control} name="description" label="Description" />
    </>
  );
};

export default CreateTodoContent;
