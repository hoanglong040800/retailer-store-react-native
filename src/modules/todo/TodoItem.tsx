import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

type Props = {
  title: string;
  description: string;
  onClickEdit: () => void;
  onClickDelete: () => void;
};

const TodoItem = ({ title, description, onClickEdit, onClickDelete }: Props) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>

      <View style={styles.btnView}>
        <IconButton icon="square-edit-outline" onPress={onClickEdit} />
        <IconButton icon="delete" onPress={onClickDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});

export default TodoItem;
