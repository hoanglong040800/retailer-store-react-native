import { createStackNavigator } from '@react-navigation/stack';
import { CategoryScreen, ProductDetailsScreen, ProductListScreen } from 'screens/Category';
import { Screen } from 'types';

const CategoryStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Screen.Category} component={CategoryScreen} />
      <Stack.Screen name={Screen.ProductList} component={ProductListScreen} />
      <Stack.Screen name={Screen.ProductDetail} component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};
export default CategoryStack;
