import { useState } from 'react';
import { View } from 'react-native';
import { DeModal } from 'components';
import { ITodo } from './todo.interface';
import TodoItem from './TodoItem';
import EditTodoContext from './EditTodoContent';

type Props = {
  list: ITodo[];
};

const TodoList = ({ list }: Props) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [editingItem, setEditingItem] = useState<ITodo>(null);

  const handleOpenEditModal = (item: ITodo) => {
    setEditingItem(item);
    setIsOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setIsOpenEditModal(false);
  };

  return (
    <View>
      {list.map(i => (
        <TodoItem key={i.id} title={i.title} description={i.description} onClickEdit={() => handleOpenEditModal(i)} />
      ))}

      <DeModal isOpen={isOpenEditModal} onClose={handleCloseEditModal} isHideHeader>
        <EditTodoContext onClose={handleCloseEditModal} initialState={editingItem} />
      </DeModal>
    </View>
  );
};

export default TodoList;
