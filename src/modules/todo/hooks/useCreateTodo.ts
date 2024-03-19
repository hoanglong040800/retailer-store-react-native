import { object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { CreateTodoForm } from '../core/todo.interface';
import { createTodoSchema } from '../core/todo.schema';

export type UseCreateTodoProps = {
  onCreateTodo: (formData: CreateTodoForm) => void;
};

const resolvedSchema = yupResolver(object(createTodoSchema));

export const useCreateTodo = ({ onCreateTodo }: UseCreateTodoProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTodoForm>({ resolver: resolvedSchema });

  const onClickSubmit = handleSubmit(onCreateTodo);

  return {
    control,
    errors,
    onClickSubmit,
  };
};
