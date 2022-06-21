import styled, { css } from 'styled-components';
import checkBoxInitial from 'assets/icons/checkBoxInitial.svg';
import checkBoxActive from 'assets/icons/checkBoxActive.svg';
import checkBoxDisable from 'assets/icons/checkBoxDisable.svg';
import { CheckboxType } from 'components/Atoms/CheckBox/';

type CheckboxStyleType = Pick<CheckboxType, 'checkedIssue'>;

const StyledDiv = styled.div<CheckboxStyleType>`
  width: 16px;
  cursor: pointer;

  #checkbox-ALL {
    & ~ label::after {
      content: ${({ checkedIssue }) =>
        checkedIssue.length && !checkedIssue.includes('ALL') && css`url(${checkBoxDisable});`}
    }
  }

  input {
    display: none;

    &:checked ~ label::after {
      content: url(${checkBoxActive});
    }
  }

    
  label {
    display: flex;
    
    &::after {
    content: url(${checkBoxInitial});
  }
`;

export default StyledDiv;
