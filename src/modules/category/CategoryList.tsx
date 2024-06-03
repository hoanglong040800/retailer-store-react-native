import { StyleSheet, View } from 'react-native';
import CategoryItem from './CategoryItem';
import { CategoryDto } from 'types';

type Props = {
  list: CategoryDto[];
  direction?: 'row' | 'column';
  onPressItem?: (index: number) => void;
};

const CategoryList = ({ list, direction = 'column', onPressItem }: Props) => {
  return (
    <View style={{ ...styles.container, flexDirection: direction }}>
      {list?.map((cate, index) => (
        <CategoryItem key={cate.name} name={cate.name} icon={cate.icon} onPress={() => onPressItem(index)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    flexWrap: 'wrap',
  },
});

export default CategoryList;
