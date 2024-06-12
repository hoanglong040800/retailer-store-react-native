import { createStackNavigator } from '@react-navigation/stack';
import { AppHeader } from 'components/header';
import CategoryStack from './Category.stack';

const AppNavigator = () => {
  const Stack = createStackNavigator();

  const renderAppHeader = () => <AppHeader />;

  return (
    <Stack.Navigator screenOptions={{ header: renderAppHeader }}>
      <Stack.Screen name="AppTabNav" component={CategoryStack} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
