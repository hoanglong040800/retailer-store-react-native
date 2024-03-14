import { DeModal, useSnackbar } from 'components';
import { CreateTodoContent, TodoList } from 'modules';
import { CreateTodoForm, ITodo } from 'modules/todo/todo.interface';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB } from 'react-native-paper';

const initialTodoList: ITodo[] = [
  {
    id: 1,
    title: 'read 2',
    description: 'read book',
  },
  {
    id: 2,
    title: 'eat',
    description: 'eat food',
  },
];

const TodoScreen = () => {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [isOpenCreateTodoModal, setIsOpenCreateTodoModal] = useState(false);

  const { openSnackbar } = useSnackbar();

  const onClickCreateTodo = () => {
    setIsOpenCreateTodoModal(true);
  };

  const onCloseCreateTodoModal = () => {
    setIsOpenCreateTodoModal(false);
  };

  const createTodo = (newTodoForm: CreateTodoForm) => {
    try {
      const newTodo: ITodo = {
        id: initialTodoList.length + 1,
        title: newTodoForm.title,
        description: newTodoForm.description,
      };

      setTodoList([...todoList, newTodo]);
      openSnackbar('success', 'Create todo successfully');
      onCloseCreateTodoModal();
    } catch (error) {
      openSnackbar('error', 'Create todo fail');
    }
  };

  return (
    <>
      <View>
        <TodoList list={todoList} />
      </View>

      <FAB size="medium" icon="plus" style={styles.fab} onPress={onClickCreateTodo} />

      <DeModal isOpen={isOpenCreateTodoModal} onClose={onCloseCreateTodoModal} isHideHeader>
        <CreateTodoContent onCreateTodo={createTodo} onClose={onCloseCreateTodoModal} />
      </DeModal>
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 80,
    right: 30,
    borderRadius: 99,
  },
});

export default TodoScreen;
