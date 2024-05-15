import { HeaderLocation, HeaderSearch } from 'modules';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const AppHeader = () => {
  return (
    <Appbar.Header style={styles.header}>
      <View style={styles.search}>
        <HeaderSearch />
      </View>

      <View style={styles.location}>
        <HeaderLocation />
      </View>
    </Appbar.Header>
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
