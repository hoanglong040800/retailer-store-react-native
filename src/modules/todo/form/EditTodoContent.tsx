import { DeAppBar, DeTextInput } from 'components';
import { useEditTodo } from '../hooks/useEditTodo';
import { EditTodoForm, ITodo } from '../core/todo.interface';

type Props = {
  initialState: ITodo;
  onClose: () => void;
  editTodo: (item: EditTodoForm) => void;
};

const EditTodoContext = ({ initialState, onClose, editTodo }: Props) => {
  const { control, errors, onClickSubmit } = useEditTodo({ initialState, editTodo });

  return (
    <>
      <DeAppBar title="Edit Todo" primaryText="Save" onPressPrimary={onClickSubmit} onPressSecondary={onClose} />

      <DeTextInput control={control} errors={errors} name="title" label="Title" />

      <DeTextInput control={control} errors={errors} name="description" label="Description" />
    </>
  );
};

export default EditTodoContext;
