import styled, { css } from 'styled-components';

export const StyledFilterBar = styled.div`
  display: flex;
  form {
    border-radius: 0px 16px 16px 0px;
  }
`;

export const StyledForm = styled.form<{ isActive: boolean; isTyping: boolean }>`
  flex-direction: row;
  align-items: center;
  width: 472px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-left: none;
  background: ${({ theme }) => theme.colors.inputBackground};

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.placeholder};
      background: ${({ theme }) => theme.colors.offWhite};
      border: 1px solid ${({ theme }) => theme.colors.titleActive};
    `}

  &:focus {
    color: ${({ theme }) => theme.colors.placeholder};
    background: ${({ theme }) => theme.colors.offWhite};
    outline: 1px solid ${({ theme }) => theme.colors.titleActive};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  border: transparent;
  padding: 0 24px;
  height: 100%;

  ${({ theme }) => theme.fontStyles.textSmall};

  &:focus {
    outline: none;
  }
`;
