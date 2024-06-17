// https://github.com/expo/expo/issues/23104#issuecomment-1689566248
import '@expo/metro-runtime';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'components';
import { GlobalConfigProvider } from 'modules';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from 'screens';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalConfigProvider>
          <SnackbarProvider>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </SnackbarProvider>
        </GlobalConfigProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
