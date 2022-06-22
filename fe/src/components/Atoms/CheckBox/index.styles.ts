import styled, { css } from 'styled-components';

import checkBoxInitial from 'assets/icons/checkBoxInitial.svg';
import checkBoxActive from 'assets/icons/checkBoxActive.svg';
import checkBoxDisable from 'assets/icons/checkBoxDisable.svg';

import { CheckboxTypes } from 'components/Atoms/CheckBox/';

type CheckboxStyleTypes = Pick<CheckboxTypes, 'checkedIssue'>;

const StyledDiv = styled.div<CheckboxStyleTypes>`
  width: 16px;
  height: 16px;
  cursor: pointer;

  #checkbox-ALL {
    & ~ label::after {
      content: ${({ checkedIssue }) =>
        checkedIssue.length && !checkedIssue.includes('ALL') && css`url(${checkBoxDisable});`};
    }
  }

  input {
    display: none;

    &:checked ~ label::after {
      width: 16px;
      height: 16px;
      content: url(${checkBoxActive});
    }
  }

  label {
    display: flex;

    &::after {
      width: 16px;
      height: 16px;
      content: url(${checkBoxInitial});
    }
  }
`;

export default StyledDiv;
