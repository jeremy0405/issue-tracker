import styled from 'styled-components';
import Dropdown, { DropdownTypes } from 'components/Atoms/Dropdown';
import Input, { InputTypes } from 'components/Atoms/Input';
import useInput from 'hooks/useInput';

const StyledFilterBar = styled.div`
  display: flex;
  form {
    border-radius: 0px 16px 16px 0px;
  }
`;

export type FilterBarTypes = DropdownTypes & InputTypes;

const FilterBar = (props: FilterBarTypes): JSX.Element => {
  const {
    indicatorStyle,
    indicatorLabel,
    dropdownTitle,
    dropdownList,
    panelType,
    inputSize,
    inputType,
    inputStyle,
    inputValue,
    inputPlaceholder,
    inputMaxLength,
  } = props;

  const [isActive, isTyping, onChangeInput, onClickInput, onBlurInput] = useInput();

  return (
    <StyledFilterBar>
      <Dropdown
        isActive={isActive}
        indicatorStyle={indicatorStyle}
        indicatorLabel={indicatorLabel}
        dropdownTitle={dropdownTitle}
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
