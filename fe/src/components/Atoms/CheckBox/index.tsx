/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import StyledDiv from 'components/Atoms/CheckBox/index.styles';

export interface CheckboxType {
  id: number | 'ALL';
  checkedItemHandler: (id: string, isChecked: boolean) => void;
  checkedIssue: string[];
}

const CheckBox = ({ id, checkedItemHandler, checkedIssue }: CheckboxType) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    checkedItemHandler(String(id), e.target.checked);
  };

  return (
    <StyledDiv className="checkbox" checkedIssue={checkedIssue} data-id={id}>
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        data-id={id}
        onChange={onChangeCheckbox}
        checked={checkedIssue.includes(String(id))}
      />
      <label htmlFor={`checkbox-${id}`} />
    </StyledDiv>
  );
};

export default CheckBox;
