import StyledDropdown from 'components/Atoms/Dropdown/index.styles';
import DropdownIndicators, { DropdownIndicatorProps } from 'components/Atoms/Dropdown/DropdownIndicators';
import DropdownPanels, { DropdownPanelsProps } from 'components/Atoms/Dropdown/DropdownPanels';

export type DropdownProps = DropdownIndicatorProps & DropdownPanelsProps & { open?: boolean };

const Dropdown = ({ open = false, ...props }: DropdownProps) => {
  const { indicatorLabel, isActive, indicatorStyle, panelType, dropdownList, dropdownTitle, clickHandler } = props;

  return (
    <StyledDropdown {...props} open={open} indicatorStyle={indicatorStyle}>
      <DropdownIndicators indicatorStyle={indicatorStyle} indicatorLabel={indicatorLabel} isActive={isActive}>
        <span>{indicatorLabel}</span>
      </DropdownIndicators>
      <DropdownPanels
        panelType={panelType}
        dropdownList={dropdownList}
        dropdownTitle={dropdownTitle}
        clickHandler={clickHandler}
      />
    </StyledDropdown>
  );
};

export default Dropdown;
