import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { getAllCategories } from 'service';
import { CategoryDto, ParamsType, Screen } from 'types';
import { THEME } from 'const';
import { useAppNavigation } from 'hooks';
import CategoryList from './CategoryList';

type Props = {
  callbackAfterPressCategory?: () => void;
};

const CategoryDrawer = ({ callbackAfterPressCategory = () => null }: Props) => {
  const { navigate } = useAppNavigation();

  const { data: categoriesList, isLoading } = useQuery<CategoryDto[], null, CategoryDto[]>({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });

  const [curMainIndex, setCurMainIndex] = useState<number>(0);

  const onPressMainCategory = (index: number) => {
    setCurMainIndex(index);
  };

  const onPressSubCategory = (index: number) => {
    const params: ParamsType = {
      selectedMainCateId: categoriesList[curMainIndex]?.id,
      selectedSubCateId: categoriesList[curMainIndex]?.childCategories?.[index].id,
    };

    navigate(Screen.ProductList, params);
    callbackAfterPressCategory();
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
