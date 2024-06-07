import { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CategoryDto } from 'types';
import CategoryItem from './CategoryItem';

type Props = {
  list: CategoryDto[];
  direction?: 'row' | 'column';
  itemSize?: 'S' | 'M';
  selectedId?: string;

  onPressItem?: (index: number, id: string) => void;
};

const itemSizeGapMap = {
  S: 0,
  M: 16,
};

const CategoryList = ({ list, direction = 'column', itemSize = 'M', selectedId, onPressItem }: Props) => {
  const scrollViewStyle = useMemo(
    () => direction === 'row' && styles[`scrollViewHor${itemSize}`],
    [direction, itemSize]
  );

  return (
    <ScrollView horizontal={direction === 'row'} style={scrollViewStyle}>
      <View style={{ ...styles.listContainer, flexDirection: direction, gap: itemSizeGapMap[itemSize] }}>
        {list?.map((cate, index) => (
          <CategoryItem
            key={cate.name}
            name={cate.name}
            icon={cate.icon}
            size={itemSize}
            isHighlighted={selectedId ? cate.id === selectedId : null}
            onPress={() => onPressItem(index, cate.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewHorS: {
    minHeight: 120,
    maxHeight: 120,
  },

  scrollViewHorM: {
    minHeight: 170,
    maxHeight: 170,
  },

  listContainer: {
    flexWrap: 'wrap',
    padding: 8,
    paddingBottom: 10,
  },
});

export default CategoryList;
