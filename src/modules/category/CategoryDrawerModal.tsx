import { DeAppBar, DeModal } from 'components';
import CategoryDrawer from './CategoryDrawer';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CategoryDrawerModal = ({ isOpen, onClose }: Props) => {
  return (
    <DeModal isOpen={isOpen} onClose={onClose} isHideHeader>
      <>
        <DeAppBar title="Categories" primaryText="" onPressSecondary={onClose} onPressPrimary={() => null} />

        <CategoryDrawer callbackAfterPressCategory={onClose} />
      </>
    </DeModal>
  );
};

export default CategoryDrawerModal;
