import { Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

type Props = {
  title: string;
  description: string;
  onClickEdit: () => void;
};

const TodoItem = ({ title, description, onClickEdit }: Props) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>

      <IconButton icon="square-edit-outline" onPress={onClickEdit} />
    </View>
  );
};

export default TodoItem;
