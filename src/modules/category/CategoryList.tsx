import { StyleSheet, View } from 'react-native';
import { CategoryDto } from 'types';
import CategoryItem from './CategoryItem';

type Props = {
  list: CategoryDto[];
  direction?: 'row' | 'column';
  itemSize?: 'S' | 'M';
  onPressItem?: (index: number) => void;
};

const itemSizeGapMap = {
  S: 0,
  M: 16,
};

const CategoryList = ({ list, direction = 'column', itemSize = 'M', onPressItem }: Props) => {
  return (
    <View style={{ ...styles.container, flexDirection: direction, gap: itemSizeGapMap[itemSize] }}>
      {list?.map((cate, index) => (
        <CategoryItem
          key={cate.name}
          name={cate.name}
          icon={cate.icon}
          size={itemSize}
          onPress={() => onPressItem(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
  },
});

export default CategoryList;
