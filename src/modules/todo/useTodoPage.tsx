import { useSnackbar } from 'components';
import { useState } from 'react';
import { CreateTodoForm, EditTodoForm, ITodo } from './todo.interface';

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
      openSnackbar('success', 'Edit todo successfully');
      onCloseEditModal();
    } catch (error) {
      openSnackbar('error', 'Edit Todo fail');
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
  };
};
