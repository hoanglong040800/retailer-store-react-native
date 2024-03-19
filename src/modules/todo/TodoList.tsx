import { View } from 'react-native';
import { DeModal } from 'components';
import { EditTodoForm, ITodo } from './todo.interface';
import TodoItem from './TodoItem';
import EditTodoContext from './EditTodoContent';

type Props = {
  list: ITodo[];
  editingItem: ITodo;
  isOpenEditModal: boolean;
  onOpenEditModal: (item: ITodo) => void;
  onCloseEditModal: () => void;
  editTodo: (item: EditTodoForm) => void;
};

const TodoList = ({ list, editingItem, isOpenEditModal, onOpenEditModal, onCloseEditModal, editTodo }: Props) => {
  return (
    <View>
      {list.map(i => (
        <TodoItem key={i.id} title={i.title} description={i.description} onClickEdit={() => onOpenEditModal(i)} />
      ))}

      <DeModal isOpen={isOpenEditModal} onClose={onCloseEditModal} isHideHeader>
        <EditTodoContext onClose={onCloseEditModal} initialState={editingItem} editTodo={editTodo} />
      </DeModal>
    </View>
  );
};

export default TodoList;
