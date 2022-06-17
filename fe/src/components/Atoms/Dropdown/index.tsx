import StyledDropdown from 'components/Atoms/Dropdown/index.styles';
import DropdownIndicators, { DropdownIndicatorProps } from 'components/Atoms/Dropdown/DropdownIndicators';
import DropdownPanels, { DropdownPanelsProps } from 'components/Atoms/Dropdown/DropdownPanels';

export type DropdownProps = DropdownIndicatorProps & DropdownPanelsProps & { open?: boolean };

const Dropdown = ({ open = false, ...props }: DropdownProps) => {
  const { indicatorLabel, state, indicatorStyle, panelType, dropdownList, dropdownTitle } = props;

  return (
    <StyledDropdown {...props} open={open} indicatorStyle={indicatorStyle}>
      <DropdownIndicators indicatorStyle={indicatorStyle} indicatorLabel={indicatorLabel} state={state}>
        <span>{indicatorLabel}</span>
      </DropdownIndicators>
      <DropdownPanels panelType={panelType} dropdownList={dropdownList} dropdownTitle={dropdownTitle} />
    </StyledDropdown>
  );
};

export default Dropdown;
