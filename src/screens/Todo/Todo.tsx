import { DeModal } from 'components';
import { TodoList } from 'modules';
import { ITodo } from 'modules/todo/todo.interface';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB, Text } from 'react-native-paper';

const TodoScreen = () => {
  const todoList: ITodo[] = [
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

  const [isOpenCreateTodoModal, setIsOpenCreateTodoModal] = useState(false);

  const onClickCreateTodo = () => {
    setIsOpenCreateTodoModal(true);
  };

  const onCloseCreateTodoModal = () => {
    setIsOpenCreateTodoModal(false);
  };

  const onConfirmCreateTodoModal = () => {};

  return (
    <>
      <View>
        <TodoList list={todoList} />
      </View>

      <FAB size="medium" icon="plus" style={styles.fab} onPress={onClickCreateTodo} />

      <DeModal
        title="Create Todo"
        isOpen={isOpenCreateTodoModal}
        onClose={onCloseCreateTodoModal}
        onConfirm={onConfirmCreateTodoModal}
      >
        <Text>Hello world</Text>
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
