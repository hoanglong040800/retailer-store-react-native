import { DeAppBar, DeTextInput } from 'components';
import { useEditTodo } from './useEditTodo';
import { ITodo } from './todo.interface';

type Props = {
  initialState: ITodo;
  onClose: () => void;
};

const EditTodoContext = ({ initialState, onClose }: Props) => {
  const { control, onClickSubmit } = useEditTodo({ initialState });

  return (
    <>
      <DeAppBar title="Edit Todo" primaryText="Save" onPressPrimary={onClickSubmit} onPressSecondary={onClose} />

      <DeTextInput control={control} name="title" label="Title" />

      <DeTextInput control={control} name="description" label="Description" />
    </>
  );
};

export default EditTodoContext;
