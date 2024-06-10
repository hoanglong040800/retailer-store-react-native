import { NavigationProp, Route } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { CategoryList } from 'modules/category';
import { ProductList } from 'modules/product';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';
import { getCategoryById } from 'service';
import { CategoryDto, ParamsType } from 'types';

type Params = Pick<ParamsType, 'selectedMainCateId' | 'selectedSubCateId'>;

type Props = {
  route: Route<'ProductList', Params>;
  navigation: NavigationProp<{ ProductList: Params }>;
};

const ProductListScreen = ({ route: { params }, navigation }: Props) => {
  const [selectedSubCate, setSelectedSubCate] = useState<{ index: number; id: string }>(null);

  const { data: lv1Category, isLoading } = useQuery<CategoryDto, null, CategoryDto>({
    queryKey: ['category'],
    queryFn: () => getCategoryById(params.selectedMainCateId),
  });

  const onPressCateItem = (index: number, id: string) => {
    setSelectedSubCate({ index, id });
  };

  useEffect(() => {
    if (!lv1Category) {
      return;
    }

    const index = lv1Category.childCategories.findIndex(cate => cate.id === params.selectedSubCateId);
    const id = lv1Category.childCategories[index]?.id;

    setSelectedSubCate({ index, id });
  }, [lv1Category, params.selectedSubCateId]);

  if (isLoading) {
    return <ActivityIndicator animating />;
  }

  return (
    <View style={styles.container}>
      {/* TODO implement components go back button */}
      <Button onPress={() => navigation.goBack()}>Go back</Button>

      <CategoryList
        list={lv1Category.childCategories}
        selectedId={selectedSubCate?.id}
        direction="row"
        itemSize="S"
        onPressItem={onPressCateItem}
      />

      <ProductList
        products={lv1Category.childCategories[selectedSubCate?.index]?.products}
        style={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // allow page to extend -> allow scroll
    paddingHorizontal: 8,
  },

  productList: {
    marginTop: 20,
  },
});

export default ProductListScreen;
