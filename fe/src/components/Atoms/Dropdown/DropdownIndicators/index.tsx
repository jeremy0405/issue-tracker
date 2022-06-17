import { ReactNode } from 'react';
import StyledDropdownIndicators from 'components/Atoms/Dropdown/DropdownIndicators/DropdownIndicators.styles';
import caret from 'assets/icons/caret.svg';

export interface DropdownIndicatorProps {
  indicatorStyle: 'STANDARD' | 'FILTERBAR';
  indicatorLabel: string;
  icon?: string;
  state?: 'ACTIVE';
  children?: ReactNode;
}

const DropdownIndicators = ({ ...props }: DropdownIndicatorProps) => {
  const { indicatorLabel, indicatorStyle, state } = props;

  return (
    <StyledDropdownIndicators role="button" indicatorStyle={indicatorStyle} state={state} icon={caret}>
      <span>{indicatorLabel}</span>
    </StyledDropdownIndicators>
  );
};

export default DropdownIndicators;
