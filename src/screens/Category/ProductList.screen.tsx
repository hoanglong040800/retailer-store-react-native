import { ProductListView } from 'modules/product';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

const ProductListScreen = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <ProductListView />;
    </View>
  );
};

export default ProductListScreen;
