import { useSnackbar } from 'components';
import { useState } from 'react';
import { SnackbarType } from 'types';
import { generateRandomString } from 'utils';
import { CreateTodoForm, EditTodoForm, ITodo } from './core/todo.interface';

const initialTodoList: ITodo[] = [
  {
    id: generateRandomString(),
    title: 'read 2',
    description: 'read book',
  },
  {
    id: generateRandomString(),
    title: 'eat',
    description: 'eat food',
  },
];

export const useTodoPage = () => {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [editingItem, setEditingItem] = useState<ITodo>(null);

  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenCreateTodoModal, setIsOpenCreateTodoModal] = useState(false);

  /**
   * @function
   */

  const onOpenEditModal = (item: ITodo) => {
    setEditingItem(item);
    setIsOpenEditModal(true);
  };

  const onCloseEditModal = () => {
    setIsOpenEditModal(false);
  };

  const { openSnackbar } = useSnackbar();

  const onClickCreateTodo = () => {
    setIsOpenCreateTodoModal(true);
  };

  const onCloseCreateTodoModal = () => {
    setIsOpenCreateTodoModal(false);
  };

  const handleShowSnackbar = (type: SnackbarType, action: 'create' | 'edit' | 'delete'): void => {
    const textByAction = type === 'success' ? 'sucessfully' : 'fail!';

    openSnackbar(type, `${action} todo ${textByAction}`);
  };

  const createTodo = (newTodoForm: CreateTodoForm) => {
    try {
      const newTodo: ITodo = {
        id: generateRandomString(),
        title: newTodoForm.title,
        description: newTodoForm.description,
      };

      setTodoList([...todoList, newTodo]);
      handleShowSnackbar('success', 'create');
      onCloseCreateTodoModal();
    } catch (error) {
      handleShowSnackbar('error', 'create');
    }
  };

  const editTodo = (editTodoForm: EditTodoForm) => {
    try {
      const newList = todoList.map(item => {
        if (item.id !== editTodoForm.id) {
          return item;
        }

        return {
          ...item,
          ...editTodoForm,
        };
      });

      setTodoList(newList);
      handleShowSnackbar('success', 'edit');
      onCloseEditModal();
    } catch (error) {
      handleShowSnackbar('error', 'edit');
    }
  };

  const deleteTodo = (deleteId: string) => {
    try {
      setTodoList(todoList.filter((item: ITodo) => item.id !== deleteId));
      handleShowSnackbar('success', 'delete');
    } catch (error) {
      handleShowSnackbar('error', 'edit');
    }
  };

  return {
    todoList,
    editingItem,
    isOpenEditModal,
    isOpenCreateTodoModal,

    onClickCreateTodo,
    onCloseCreateTodoModal,
    onOpenEditModal,
    onCloseEditModal,
    createTodo,
    editTodo,
    deleteTodo,
  };
};
