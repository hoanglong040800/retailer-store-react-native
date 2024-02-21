import "@expo/metro-runtime";
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { AppNavigator } from 'screens';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};


// https://github.com/expo/expo/issues/23104#issuecomment-1689566248
// import @expo/metro-runtime & register to have hotreload on web
export default registerRootComponent(App)
