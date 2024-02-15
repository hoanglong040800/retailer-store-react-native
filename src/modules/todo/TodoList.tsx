import { View } from 'react-native';
import { ITodo } from './todo.interface';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoListItems: ITodo[] = [
    {
      id: 1,
      title: 'read',
      description: 'read book',
    },
    {
      id: 2,
      title: 'eat',
      description: 'eat food',
    },
  ];

  return (
    <View>
      {todoListItems.map(i => (
        <TodoItem key={i.id} title={i.title} description={i.description} />
      ))}
    </View>
  );
};

export default TodoList;
