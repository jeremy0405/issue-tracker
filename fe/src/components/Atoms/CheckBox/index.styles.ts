import styled from 'styled-components';
import checkBoxInitial from 'assets/icons/checkBoxInitial.svg';
import checkBoxActive from 'assets/icons/checkBoxActive.svg';

const StyledDiv = styled.div`
  cursor: pointer;

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
