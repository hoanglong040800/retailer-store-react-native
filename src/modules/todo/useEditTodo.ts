import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';
import { useSnackbar } from 'components';
import { EditTodoForm, ITodo } from './todo.interface';
import { editTodoSchema } from './todo.schema';

const resolvedSchema = yupResolver(object(editTodoSchema));

type Props = {
  initialState: ITodo;
  editTodo: (editTodo: EditTodoForm) => void;
};

export const useEditTodo = ({ initialState, editTodo }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditTodoForm>({
    defaultValues: initialState,
    resolver: resolvedSchema,
  });

  const { openSnackbar } = useSnackbar();

  /**
   * @Functions
   */

  const onValidSubmit = (formData: EditTodoForm) => {
    editTodo(formData);
    openSnackbar('success', 'Edit Todo successfully');
  };

  const onInvalidSubmit = () => {
    openSnackbar('error', 'Edit Todo failed');
  };

  const onClickSubmit = handleSubmit(onValidSubmit, onInvalidSubmit);

  return {
    control,
    errors,
    onClickSubmit,
  };
};
