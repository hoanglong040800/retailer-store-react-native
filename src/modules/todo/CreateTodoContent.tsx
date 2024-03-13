import { DeAppBar, DeTextInput } from 'components';
import { useCreateTodo } from './useCreateTodo';

type Props = {
  onClose: () => void;
};

const CreateTodoContent = ({ onClose }: Props) => {
  const { control, onClickSubmit } = useCreateTodo();

  return (
    <>
      <DeAppBar title="Create Todo" primaryText="Save" onPressPrimary={onClickSubmit} onPressSecondary={onClose} />

      <DeTextInput control={control} name="title" label="Title" />

      <DeTextInput control={control} name="description" label="Description" />
    </>
  );
};

export default CreateTodoContent;
