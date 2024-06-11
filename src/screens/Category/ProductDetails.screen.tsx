import { NavigationProp, Route } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { CategoryBreadCrumb } from 'modules/category';
import { ProductDetail } from 'modules/product/detail';
import { View } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';
import { getProductById } from 'service';
import { ParamsType, ProductDto } from 'types';

type Params = Pick<ParamsType, 'productId'>;

type Props = {
  route: Route<'ProductDetails', Params>;
  navigation: NavigationProp<{ ProductDetails: Params }>;
};

const ProductDetailsScreen = ({ navigation, route: { params } }: Props) => {
  const { data: product, isLoading } = useQuery<ProductDto, null, ProductDto>({
    queryKey: ['product'],
    queryFn: () => getProductById(params.productId),
  });

  if (isLoading || !product) {
    return <ActivityIndicator animating />;
  }

  return (
    <View>
      <Button onPress={() => navigation.goBack()}>Go back</Button>

      <CategoryBreadCrumb />

      <ProductDetail
        name={product.name}
        description={product.description}
        price={product.price}
        image={product.image}
      />
    </View>
  );
};

export default ProductDetailsScreen;
