// https://github.com/expo/expo/issues/23104#issuecomment-1689566248
import '@expo/metro-runtime';
import { NavigationContainer } from '@react-navigation/native';
import { SnackbarProvider } from 'components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from 'screens';

const App = () => {
  return (
    <SafeAreaProvider>
      <SnackbarProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SnackbarProvider>
    </SafeAreaProvider>
  );
};

export default App;
