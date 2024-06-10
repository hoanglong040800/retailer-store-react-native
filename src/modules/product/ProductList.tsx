import { FlatList, StyleSheet, ViewStyle, StyleProp, View } from 'react-native';
import { ProductDto } from 'types/dto/product.dto';
import { useAppNavigation } from 'hooks';
import { Screen } from 'types';
import ProductCard from './ProductCard';

type Props = {
  products: ProductDto[];
  style?: StyleProp<ViewStyle>;
};

const ProductList = ({ products, style }: Props) => {
  const { navigate } = useAppNavigation();

  const onPressProductCard = (id: string) => {
    navigate(Screen.ProductDetail, { productId: id });
  };

  const renderProductCard = ({ item }: { item: ProductDto }) => (
    <ProductCard name={item.name} image={item.image} price={item.price} onPress={() => onPressProductCard(item.id)} />
  );

  // TODO return empty component
  if (!products || products.length === 0) {
    return <View>No product found</View>;
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
