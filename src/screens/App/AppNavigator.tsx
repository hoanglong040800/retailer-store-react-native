import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import { NotiScreen } from 'screens/Noti';
import { CartScreen } from 'screens/Cart';
import { CategoryScreen } from 'screens/Category';
import { HomeScreen } from 'screens/Home';
import { AccountScreen } from 'screens/Account';
import { TabScreenProps } from 'types';

const tabScreen: TabScreenProps[] = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      tabBarLabel: 'Home',
      iconName: 'home',
    },
  },

  {
    name: 'Cart',
    component: CartScreen,
    options: {
      tabBarLabel: 'Cart',
      iconName: 'cart-outline',
    },
  },

  {
    name: 'Category',
    component: CategoryScreen,
    options: {
      tabBarLabel: 'Category',
      iconName: 'view-grid',
    },
  },

  {
    name: 'Notification',
    component: NotiScreen,
    options: {
      tabBarLabel: 'Notification',
      iconName: 'bell',
    },
  },

  {
    name: 'Account',
    component: AccountScreen,
    options: {
      tabBarLabel: 'Account',
      iconName: 'account',
    },
  },
];

const AppNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();

  const renderTabs = () =>
    tabScreen.map(({ name, component, options: { tabBarLabel, iconName } }) => (
      <Tab.Screen
        key={name}
        name={name}
        component={component}
        options={{
          tabBarLabel,
          tabBarIcon: iconName,
        }}
      />
    ));

  return <Tab.Navigator>{renderTabs()}</Tab.Navigator>;
};

export default AppNavigator;
