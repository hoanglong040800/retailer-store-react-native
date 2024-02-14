import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, TodoScreen } from '.';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  const { Navigator, Screen } = Stack


  return (
    <Navigator>
      <Screen
        name="Todo"
        component={TodoScreen}
        options={{ title: 'Todo' }}
      />

      <Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
    </Navigator>
  );
};

export default AppNavigator;
