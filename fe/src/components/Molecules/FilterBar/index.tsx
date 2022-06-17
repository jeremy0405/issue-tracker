import Dropdown from 'components/Atoms/Dropdown';
import Input from 'components/Atoms/Input';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

const StyledFilterBar = styled.div`
  display: flex;
  form {
    border-radius: 0px 16px 16px 0px;
  }
`;

const FilterBar = (): JSX.Element => {
  return (
    <StyledFilterBar>
      <Dropdown indicatorStyle="FILTERBAR" />
      <Input
        inputSize="SMALL"
        inputType="text"
        inputStyle="FILTERBAR"
        inputMaxLength={25}
        inputValue="is:issue is:open"
        inputPlaceholder="Search all issues"
        Icon={SearchIcon}
      />
    </StyledFilterBar>
  );
};

export default FilterBar;
