import { useQuery } from '@tanstack/react-query';
import { CategoryList } from 'modules/category';
import { ProductList } from 'modules/product';
import { StyleSheet } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';
import { getCategoryById } from 'service';
import { CategoryDto } from 'types';

const ProductListScreen = ({ navigation }) => {
  const { data: lv1Category, isLoading } = useQuery<CategoryDto, null, CategoryDto>({
    queryKey: ['category'],
    queryFn: () => getCategoryById('a8bd08ba-2d76-4886-9cce-29a8cd8e031b'),
  });

  const handlePressProductCard = () => {
    // TODO
  };

  if (isLoading) {
    return <ActivityIndicator animating />;
  }

  return (
    <>
      <Button onPress={() => navigation.goBack()}>Go back</Button>

      <CategoryList
        list={lv1Category.childCategories}
        direction="row"
        itemSize="S"
        onPressItem={handlePressProductCard}
      />

      <ProductList products={lv1Category.childCategories[0].products} style={styles.productList} />
    </>
  );
};

const styles = StyleSheet.create({
  productList: {
    marginTop: 12,
  },
});

export default ProductListScreen;
