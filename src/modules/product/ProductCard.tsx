import { StyleSheet } from 'react-native';
import { Card, Divider, Subheading, Text } from 'react-native-paper';
import { formatCurrency } from 'utils';

type Props = {
  name: string;
  image: string;
  price: number;
  onPress: () => void;
};

const ProductCard = ({ name, image, price, onPress = () => null }: Props) => {
  return (
    <Card style={styles.container} onPress={onPress}>
      <Card.Cover source={{ uri: image }} style={styles.cover} resizeMode="contain" />

      <Card.Content>
        <Text variant="titleSmall" style={styles.title}>
          {name}
        </Text>

        <Divider />

        <Subheading style={styles.price}>{formatCurrency(price)}</Subheading>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '30%',
  },

  cover: {
    height: 100,
    backgroundColor: 'white',
  },

  title: {
    paddingVertical: 4,
    height: 45,
  },

  price: {
    textAlign: 'right',
  },
});

export default ProductCard;
