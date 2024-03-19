import { DeAppBar, DeTextInput } from 'components';
import { UseCreateTodoProps, useCreateTodo } from './useCreateTodo';

type Props = UseCreateTodoProps & {
  onClose: () => void;
};

const CreateTodoContent = ({ onCreateTodo, onClose }: Props) => {
  const { control, errors, onClickSubmit } = useCreateTodo({ onCreateTodo });

  return (
    <>
      <DeAppBar title="Create Todo" primaryText="Save" onPressPrimary={onClickSubmit} onPressSecondary={onClose} />

      <DeTextInput control={control} errors={errors} name="title" label="Title" />

      <DeTextInput control={control} errors={errors} name="description" label="Description" />
    </>
  );
};

export default CreateTodoContent;
