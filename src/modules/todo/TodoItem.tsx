import { Text, View } from 'react-native';

type Props = {
  title: string;
  description: string;
};

const TodoItem = ({ title, description }: Props) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default TodoItem;
