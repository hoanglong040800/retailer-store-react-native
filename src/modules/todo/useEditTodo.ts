import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';
import { useSnackbar } from 'components';
import { EditTodoForm, ITodo } from './todo.interface';
import { editTodoSchema } from './todo.schema';

const resolvedSchema = yupResolver(object(editTodoSchema));

type Props = {
  initialState: ITodo;
};

export const useEditTodo = ({ initialState }: Props) => {
  const { control, handleSubmit } = useForm<EditTodoForm>({
    defaultValues: initialState,
    resolver: resolvedSchema,
  });

  const { openSnackbar } = useSnackbar();

  /**
   * @Functions
   */

  const onValidSubmit = (formData: EditTodoForm) => {
    console.log('edit submit', formData);
    openSnackbar('success', 'Edit Todo successfully');
  };

  const onInvalidSubmit = () => {
    openSnackbar('error', 'Edit Todo failed');
  };

  const onClickSubmit = handleSubmit(onValidSubmit, onInvalidSubmit);

  return {
    control,
    onClickSubmit,
  };
};
