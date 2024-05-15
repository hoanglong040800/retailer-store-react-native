import { createStackNavigator } from '@react-navigation/stack';
import { AppHeader } from 'components/header';
import AppTabNav from './AppTabNav';

const AppNavigator = () => {
  const Stack = createStackNavigator();

  const renderAppHeader = () => <AppHeader />;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AppTabNav"
        component={AppTabNav}
        options={{
          header: renderAppHeader,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
