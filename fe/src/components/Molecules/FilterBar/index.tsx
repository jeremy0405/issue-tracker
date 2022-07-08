import { useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { InputValueState, QueryStringState } from 'pages/Issues';

import Dropdown, { DropdownTypes } from 'components/Atoms/Dropdown';
import { InputTypes } from 'components/Atoms/Input';
import useInput from 'hooks/useInput';
import { StyledFilterBar, StyledForm, StyledInput } from 'components/Molecules/FilterBar/index.styles';

export type FilterBarTypes = DropdownTypes & InputTypes;

const FilterBar = (props: FilterBarTypes): JSX.Element => {
  const {
    type,
    indicatorStyle,
    indicatorLabel,
    dropdownTitle,
    dropdownList,
    contentList,
    panelType,
    inputType,
    inputPlaceholder,
    inputMaxLength,
    onChange,
  } = props;

  const { isActive, isTyping, onChangeInput, onClickInput, onBlurInput } = useInput();
  const inputRef = useRef<HTMLInputElement>(null);

  const setInputValue = useSetRecoilState(QueryStringState);
  const inputValue = useRecoilValue(InputValueState);

  return (
    <StyledFilterBar>
      <Dropdown
        type={type}
        isActive={isActive}
        indicatorStyle={indicatorStyle}
        indicatorLabel={indicatorLabel}
        dropdownTitle={dropdownTitle}
        dropdownList={dropdownList}
        contentList={contentList}
        panelType={panelType}
        onChange={onChange}
      />
      <StyledForm isActive={isActive} isTyping={isTyping} onClick={() => inputRef?.current?.focus()}>
        <StyledInput
          type={inputType}
          maxLength={inputMaxLength}
          value={inputValue}
          placeholder={inputPlaceholder}
          ref={inputRef}
          onChange={(e) => {
            // setInputValue(e.target.value);
            onChangeInput(e);
          }}
          onClick={onClickInput}
          onBlur={onBlurInput}
        />
      </StyledForm>
    </StyledFilterBar>
  );
};

export default FilterBar;
