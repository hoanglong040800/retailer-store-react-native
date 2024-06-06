import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN } from 'const';
import { CategoryScreen } from 'screens/Category';
import ProductListScreen from 'screens/Category/ProductList.screen';

const CategoryStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREEN.CATEGORY} component={CategoryScreen} />
      <Stack.Screen name={SCREEN.PRODUCT_LIST} component={ProductListScreen} />
    </Stack.Navigator>
  );
};
export default CategoryStack;
