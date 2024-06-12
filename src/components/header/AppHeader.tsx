import { HeaderLocation, HeaderSearch } from 'modules';
import { CategoryDrawer } from 'modules/category';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const AppHeader = () => {
  const [isShowDrawer, setIsShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setIsShowDrawer(!isShowDrawer);
  };

  return (
    <View>
      <Appbar.Header style={styles.header}>
        <Appbar.Action icon="menu" onPress={toggleDrawer} />

        <View style={styles.search}>
          <HeaderSearch />
        </View>

        <View style={styles.location}>
          <HeaderLocation />
        </View>
      </Appbar.Header>

      <View style={{ display: isShowDrawer ? 'flex' : 'none' }}>
        <CategoryDrawer callbackAfterPressCategory={toggleDrawer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(243, 237, 246)',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  search: {
    flex: 2,
  },

  location: {
    flex: 1,
  },
});

export default AppHeader;
