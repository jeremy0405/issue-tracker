import { ReactNode } from 'react';
import StyledDropdownIndicators from 'components/Atoms/Dropdown/DropdownIndicators/index.styles';

import Icon from 'components/Atoms/Icon';
import { colors } from 'styles/theme';

export interface DropdownIndicatorProps {
  indicatorStyle: 'STANDARD' | 'FILTERBAR' | 'SIDEBAR';
  indicatorLabel: string;
  icon?: string;
  isActive?: boolean;
  children?: ReactNode;
}

const DropdownIndicators = ({ indicatorLabel, ...props }: DropdownIndicatorProps) => {
  const { indicatorStyle, isActive } = props;
  const icon = indicatorStyle === 'SIDEBAR' ? 'Plus' : 'Caret';

  return (
    <StyledDropdownIndicators role="button" indicatorStyle={indicatorStyle} isActive={isActive}>
      <span>{indicatorLabel}</span>
      <Icon icon={icon} stroke={colors.label} />
    </StyledDropdownIndicators>
  );
};

export default DropdownIndicators;
