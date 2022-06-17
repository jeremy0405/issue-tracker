import StyledDropdown from 'components/Atoms/Dropdown/index.styles';
import DropdownIndicators, { DropdownIndicatorProps } from 'components/Atoms/Dropdown/DropdownIndicators';
import DropdownPanels, { DropdownPanelsProps } from 'components/Atoms/Dropdown/DropdownPanels';

export type DropdownProps = DropdownIndicatorProps & DropdownPanelsProps & { open?: boolean };

const Dropdown = ({ indicatorLabel = 'Filter', open = false, ...props }: DropdownProps) => {
  const { icon, state, indicatorStyle, panelType, dropdownList, dropdownTitle, initIcon, activeIcon } = props;

  return (
    <StyledDropdown {...props} open={open} indicatorStyle={indicatorStyle}>
      <DropdownIndicators indicatorStyle={indicatorStyle} indicatorLabel={indicatorLabel} icon={icon} state={state}>
        <span>{indicatorLabel}</span>
      </DropdownIndicators>
      <DropdownPanels
        panelType={panelType}
        dropdownList={dropdownList}
        dropdownTitle={dropdownTitle}
        initIcon={initIcon}
        activeIcon={activeIcon}
      />
    </StyledDropdown>
  );
};

export default Dropdown;
