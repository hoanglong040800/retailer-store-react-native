import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

type Props = {
  icon: string;
  name: string;
  onPress: () => void;
};

const CategoryItem = ({ icon, name, onPress = () => null }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: icon }} style={styles.image} />

        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: 100,
  },

  image: {
    width: 100,
    height: 100,
  },
});

export default CategoryItem;
