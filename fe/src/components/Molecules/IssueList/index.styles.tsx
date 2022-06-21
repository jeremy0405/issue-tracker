import styled from 'styled-components';

export const StyeldUl = styled.ul`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 16px;

  li {
    background: ${({ theme }) => theme.colors.offWhite};
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};

    &:last-child {
      border-bottom: none;
      border-radius: 0px 0px 16px 16px;
    }
  }
`;

export const IssueTitle = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f7f7fc;
  padding: 18px 40px 18px 32px;
  border-radius: 16px 16px 0px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`;

export const OpenCloseTab = styled.div`
  display: flex;

  .checkbox {
    margin-right: calc(32px - 12px);
  }

  label {
    padding-top: 4px;
  }

  svg {
    margin-top: 2px;
  }

  .selected_issue {
    display: flex;
    align-items: center;
    padding: 0px 12px;
    color: ${({ theme }) => theme.colors.label};
    ${({ theme }) => theme.fontStyles.linkSmall};
  }
`;
