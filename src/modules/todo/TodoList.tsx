import { View } from 'react-native';
import { ITodo } from './todo.interface';
import TodoItem from './TodoItem';

type Props = {
  list: ITodo[];
};

const TodoList = ({ list }: Props) => {
  return (
    <View>
      {list.map(i => (
        <TodoItem key={i.id} title={i.title} description={i.description} />
      ))}
    </View>
  );
};

export default TodoList;
