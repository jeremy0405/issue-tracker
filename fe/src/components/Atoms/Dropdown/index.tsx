import StyledDropdown from 'components/Atoms/Dropdown/index.styles';
import DropdownIndicators, { DropdownIndicatorTypes } from 'components/Atoms/Dropdown/DropdownIndicators';
import DropdownPanels, { DropdownPanelsTypes } from 'components/Atoms/Dropdown/DropdownPanels';

export type DropdownTypes = DropdownIndicatorTypes & DropdownPanelsTypes & { open?: boolean };

const Dropdown = ({ open = false, ...props }: DropdownTypes) => {
  const {
    type,
    indicatorLabel,
    isActive,
    indicatorStyle,
    panelType,
    dropdownList,
    dropdownTitle,
    clickHandler,
    onChange,
  } = props;

  return (
    <StyledDropdown open={open} indicatorStyle={indicatorStyle}>
      <DropdownIndicators indicatorStyle={indicatorStyle} indicatorLabel={indicatorLabel} isActive={isActive}>
        <span>{indicatorLabel}</span>
      </DropdownIndicators>
      <DropdownPanels
        type={type}
        panelType={panelType}
        dropdownList={dropdownList}
        dropdownTitle={dropdownTitle}
        clickHandler={clickHandler}
        onChange={onChange}
      />
    </StyledDropdown>
  );
};

export default Dropdown;
