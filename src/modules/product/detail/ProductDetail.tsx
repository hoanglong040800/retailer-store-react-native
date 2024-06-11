import { Image, StyleSheet, View } from 'react-native';
import { Chip, Surface, Text } from 'react-native-paper';
import { formatCurrency } from 'utils';

type Props = {
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductDetail = ({ name, description, price, image }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <Surface elevation={1} style={styles.surface}>
        <View style={styles.content}>
          <View>
            <Text variant="titleMedium">{name}</Text>
            <Text variant="labelLarge">{formatCurrency(price)}</Text>
          </View>

          <View>
            <Chip icon="check">Available</Chip>
          </View>
        </View>

        <Chip mode="outlined" icon="phone" style={styles.outOfStockNote}>
          You will be informed when the product is not available
        </Chip>

        <View style={styles.descCtn}>
          <Text variant="titleSmall">Description</Text>
          <Text variant="bodyMedium">{description || 'Product currently have no description'}</Text>
        </View>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: '100%',
    height: 300,
    backgroundColor: 'white',
    objectFit: 'contain',
  },

  surface: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'white',

    marginTop: 16,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  outOfStockNote: {
    maxWidth: 600,
  },

  descCtn: {
    marginTop: 16,
  },
});

export default ProductDetail;
