import styled from 'styled-components';

export const StyledAddIssueForm = styled.div`
  display: inline-flex;
  svg {
    margin-right: 16px;
  }
`;

export const IssueForm = styled.div`
  width: 880px;

  form {
    width: 100%;
  }

  form + form {
    margin-top: 16px;
  }
`;
