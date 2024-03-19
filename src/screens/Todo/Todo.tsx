import { DeModal } from 'components';
import { CreateTodoContent, TodoList, useTodoPage } from 'modules';
import { StyleSheet, View } from 'react-native';
import { FAB } from 'react-native-paper';

const TodoScreen = () => {
  const {
    todoList,
    isOpenCreateTodoModal,

    createTodo,
    onClickCreateTodo,
    onCloseCreateTodoModal,

    editingItem,
    isOpenEditModal,
    onOpenEditModal,
    onCloseEditModal,

    editTodo,
  } = useTodoPage();

  return (
    <>
      <View>
        <TodoList
          list={todoList}
          editingItem={editingItem}
          isOpenEditModal={isOpenEditModal}
          onOpenEditModal={onOpenEditModal}
          onCloseEditModal={onCloseEditModal}
          editTodo={editTodo}
        />
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
