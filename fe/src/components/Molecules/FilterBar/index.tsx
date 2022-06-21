import Dropdown, { DropdownProps } from 'components/Atoms/Dropdown';
import Input, { InputProps } from 'components/Atoms/Input';
import useInput from 'hooks/useInput';
import styled from 'styled-components';

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

  const { isActive, isTyping, onChangeInput, onClickInput, onBlurInput } = useInput();

  return (
    <StyledFilterBar>
      <Dropdown
        isActive={isActive}
        indicatorStyle={indicatorStyle}
        indicatorLabel={indicatorLabel}
        dropdownList={dropdownList}
        panelType={panelType}
      />
      <Input
        isActive={isActive}
        isTyping={isTyping}
        inputSize={inputSize}
        inputType={inputType}
        inputStyle={inputStyle}
        inputMaxLength={inputMaxLength}
        inputValue={inputValue}
        inputPlaceholder={inputPlaceholder}
        onChange={onChangeInput}
        onClick={onClickInput}
        onBlur={onBlurInput}
      />
    </StyledFilterBar>
  );
};

export default FilterBar;
