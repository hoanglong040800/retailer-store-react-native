import { Image, StyleSheet, View } from 'react-native';
import { Surface, Text } from 'react-native-paper';

type Props = {
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductDetail = ({ name, description, price, image }: Props) => {
  return (
    <View>
      <Image source={{ uri: image }} style={styles.image} />

      <Surface elevation={1}>
        <Text variant="titleMedium">{name}</Text>

        <Text variant="labelLarge">{price}</Text>

        <Text variant="bodyMedium">{description}</Text>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    backgroundColor: 'white',
  },
});

export default ProductDetail;
