import { object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'components';
import { CreateTodoForm } from './todo.interface';
import { createTodoSchema } from './todo.schema';

export type UseCreateTodoProps = {
  onCreateTodo: (formData: CreateTodoForm) => void;
};

const resolvedSchema = yupResolver(object(createTodoSchema));

export const useCreateTodo = ({ onCreateTodo }: UseCreateTodoProps) => {
  const { openSnackbar } = useSnackbar();
  const { control, handleSubmit } = useForm<CreateTodoForm>({ resolver: resolvedSchema });

  const onValidSubmit = (formData: CreateTodoForm) => {
    try {
      onCreateTodo(formData);

      openSnackbar('success', 'Create todo successfully');
    } catch (err) {
      onInvalidSubmit();
    }
  };

  const onInvalidSubmit = () => {
    openSnackbar('error', 'Create todo fail');
  };

  const onClickSubmit = handleSubmit(onValidSubmit, onInvalidSubmit);

  return {
    control,
    onClickSubmit,
  };
};
