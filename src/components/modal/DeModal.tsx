import { DeAppBar } from 'components/appbar';
import { Modal } from 'react-native';

type Props = {
  isOpen: boolean;
  title?: string;
  children: JSX.Element;
  isHideHeader?: boolean;
  onConfirm?: () => void;
  onClose: () => void;
};

const DeModal = ({ isOpen, title, children, isHideHeader, onConfirm, onClose }: Props) => {
  return (
    <Modal visible={isOpen} onDismiss={onClose} presentationStyle="overFullScreen" animationType="slide">
      {!isHideHeader && (
        <DeAppBar title={title} primaryText="Save" onPressPrimary={onConfirm} onPressSecondary={onClose} />
      )}

      {children}
    </Modal>
  );
};

export default DeModal;
