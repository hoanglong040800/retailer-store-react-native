import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { AccountScreen } from 'screens/Account';
import { CartScreen } from 'screens/Cart';
import { HomeScreen } from 'screens/Home';
import { NotiScreen } from 'screens/Noti';
import { TabScreenProps, Screen } from 'types';
import CategoryStack from './Category.stack';

const tabScreen: TabScreenProps[] = [
  {
    name: Screen.Home,
    component: HomeScreen,
    options: {
      tabBarLabel: 'Home',
      iconName: 'home',
    },
  },

  {
    name: Screen.Cart,
    component: CartScreen,
    options: {
      tabBarLabel: 'Cart',
      iconName: 'cart-outline',
    },
  },

  {
    name: Screen.Category,
    component: CategoryStack,
    options: {
      tabBarLabel: 'Category',
      iconName: 'view-grid',
    },
  },

  {
    name: Screen.Noti,
    component: NotiScreen,
    options: {
      tabBarLabel: 'Notification',
      iconName: 'bell',
    },
  },

  {
    name: Screen.Account,
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

  return <Tab.Navigator style={styles.container}>{renderTabs()}</Tab.Navigator>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
  },
});

export default AppTabNav;
