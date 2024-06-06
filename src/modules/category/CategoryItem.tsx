import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

type Props = {
  icon: string;
  name: string;
  size?: 'S' | 'M';
  onPress: () => void;
};

const CategoryItem = ({ icon, name, size = 'M', onPress = () => null }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: icon }} style={styles[`image${size}`]} />

        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
  },

  imageS: {
    width: 50,
    height: 50,
  },

  imageM: {
    width: 100,
    height: 100,
  },
});

export default CategoryItem;
