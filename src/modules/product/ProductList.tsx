import { FlatList, StyleSheet, ViewStyle, StyleProp, View } from 'react-native';
import { ProductDto } from 'types/dto/product.dto';
import ProductCard from './ProductCard';

type Props = {
  products: ProductDto[];
  style?: StyleProp<ViewStyle>;
};

const ProductList = ({ products, style }: Props) => {
  const renderProductCard = ({ item }: { item: ProductDto }) => (
    <ProductCard name={item.name} image={item.image} price={item.price} />
  );

  // TODO return empty component
  if (!products) {
    return <View>No products :( </View>;
  }

  return (
    <FlatList
      data={products}
      numColumns={3}
      contentContainerStyle={styles.listGap}
      columnWrapperStyle={styles.listGap}
      renderItem={renderProductCard}
      style={style}
    />
  );
};

const styles = StyleSheet.create({
  listGap: {
    gap: 16,
  },
});

export default ProductList;
