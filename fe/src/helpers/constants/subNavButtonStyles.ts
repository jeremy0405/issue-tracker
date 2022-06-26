import { ButtonTypes } from 'components/Atoms/Button';
import { colors } from 'styles/theme';

interface subNavButtonStyleTypes {
  add: ButtonTypes;
  close: ButtonTypes;
}

const subNavButtonStyleInfo: subNavButtonStyleTypes = {
  add: {
    buttonStyle: 'STANDARD',
    iconInfo: {
      fill: colors.offWhite,
      icon: 'Plus',
      stroke: colors.offWhite,
    },
    label: '추가',
    size: 'SMALL',
  },
  close: {
    buttonStyle: 'SECONDARY',
    iconInfo: {
      icon: 'XSquare',
    },
    label: '삭제',
    size: 'SMALL',
  },
};

export default subNavButtonStyleInfo;
