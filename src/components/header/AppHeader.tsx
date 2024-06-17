import { CUSTOM_THEME, THEME } from 'const';
import { HeaderLocation, HeaderSearch } from 'modules';
import { CategoryDrawerModal } from 'modules/category';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const AppHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const onCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Appbar.Header style={styles.header}>
        <Appbar.Action icon="menu" onPress={toggleDrawer} />

        <View style={styles.search}>
          <HeaderSearch />
        </View>

        <View style={styles.location}>
          <HeaderLocation />
        </View>
      </Appbar.Header>

      <CategoryDrawerModal isOpen={isDrawerOpen} onClose={onCloseDrawer} />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: THEME.colors.primaryContainer,
    height: CUSTOM_THEME.headerHeight,
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
