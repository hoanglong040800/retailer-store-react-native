import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { AccountScreen } from 'screens/Account';
import { CartScreen } from 'screens/Cart';
import { HomeScreen } from 'screens/Home';
import { NotiScreen } from 'screens/Noti';
import { TabScreenProps } from 'types';
import { SCREEN } from 'const';
import CategoryStack from './Category.stack';

const tabScreen: TabScreenProps[] = [
  {
    name: SCREEN.HOME,
    component: HomeScreen,
    options: {
      tabBarLabel: 'Home',
      iconName: 'home',
    },
  },

  {
    name: SCREEN.CART,
    component: CartScreen,
    options: {
      tabBarLabel: 'Cart',
      iconName: 'cart-outline',
    },
  },

  {
    name: SCREEN.CATEGORY,
    component: CategoryStack,
    options: {
      tabBarLabel: 'Category',
      iconName: 'view-grid',
    },
  },

  {
    name: SCREEN.NOTI,
    component: NotiScreen,
    options: {
      tabBarLabel: 'Notification',
      iconName: 'bell',
    },
  },

  {
    name: SCREEN.ACCOUNT,
    component: AccountScreen,
    options: {
      tabBarLabel: 'Account',
      iconName: 'account',
    },
  },
];

const AppTabNav = () => {
  const Tab = createMaterialBottomTabNavigator();

  const renderTabs = () =>
    tabScreen.map(({ name, component, options: { tabBarLabel, iconName } }) => (
      <Tab.Screen
        key={name}
        name={name}
        component={component}
        options={{
          tabBarLabel,
          title: `${tabBarLabel} | Retail Store`,
          tabBarIcon: iconName,
        }}
      />
    ));

  return <Tab.Navigator>{renderTabs()}</Tab.Navigator>;
};

export default AppTabNav;
