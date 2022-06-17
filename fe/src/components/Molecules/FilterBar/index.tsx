import Dropdown, { DropdownProps } from 'components/Atoms/Dropdown';
import Input, { InputProps } from 'components/Atoms/Input';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

const StyledFilterBar = styled.div`
  display: flex;
  form {
    border-radius: 0px 16px 16px 0px;
  }
`;

export type FilterBarProps = DropdownProps & InputProps;

const FilterBar = (props: FilterBarProps): JSX.Element => {
  const {
    indicatorStyle,
    indicatorLabel,
    dropdownList,
    panelType,
    inputSize,
    inputType,
    inputStyle,
    inputValue,
    inputPlaceholder,
    inputMaxLength,
  } = props;

  return (
    <StyledFilterBar>
      <Dropdown
        indicatorStyle={indicatorStyle}
        indicatorLabel={indicatorLabel}
        dropdownList={dropdownList}
        panelType={panelType}
      />
      <Input
        inputSize={inputSize}
        inputType={inputType}
        inputStyle={inputStyle}
        inputMaxLength={inputMaxLength}
        inputValue={inputValue}
        inputPlaceholder={inputPlaceholder}
        Icon={SearchIcon}
      />
    </StyledFilterBar>
  );
};

export default FilterBar;
