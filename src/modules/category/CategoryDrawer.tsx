import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { THEME } from 'const';
import CategoryList from './CategoryList';
import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from 'service';
import { CategoryDto } from 'types';
import { ActivityIndicator } from 'react-native-paper';

const CategoryDrawer = () => {
  const { data: categoriesList, isLoading } = useQuery<null, null, CategoryDto[]>({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });

  const [curMainIndex, setCurMainIndex] = useState<number>(0);

  const onPressMainCategory = (index: number) => {
    setCurMainIndex(index);
  };

  const onPressSubCategory = () => {
    // TODO RSP-3
  };

  if (isLoading) {
    return <ActivityIndicator animating />;
  }

  return (
    <View style={styles.layout}>
      <ScrollView style={styles.leftCate}>
        <CategoryList list={categoriesList} onPressItem={onPressMainCategory} />
      </ScrollView>

      <View style={styles.rightCate}>
        <CategoryList
          list={categoriesList[curMainIndex].childCategories}
          direction="row"
          onPressItem={onPressSubCategory}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    flex: 1,
  },

  leftCate: {
    backgroundColor: THEME.colors.elevation.level1,
    padding: 8,
    maxWidth: 150,
  },

  rightCate: {
    padding: 8,
    flex: 1,
    backgroundColor: THEME.colors.elevation.level1,
  },
});

export default CategoryDrawer;
