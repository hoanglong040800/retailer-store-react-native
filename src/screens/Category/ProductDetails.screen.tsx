import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

const ProductDetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <Text>Product Details</Text>;
    </View>
  );
};

export default ProductDetailsScreen;
