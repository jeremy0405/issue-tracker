/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';

type FormStyleProps = {
  inputSize: 'SMALL' | 'MEDIUM' | 'LARGE';
  isActive: boolean;
};

export const Form = styled.form<FormStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.inputBackground};

  svg {
    margin-right: 12px;
  }

  label {
    ${({ theme }) => theme.fontStyles.textXSmall}
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.placeholder};
      background: ${({ theme }) => theme.colors.offWhite};
      border: 1px solid ${({ theme }) => theme.colors.titleActive};
    `}

  ${({ inputSize }) => {
    // eslint-disable-next-line default-case
    switch (inputSize) {
      case 'LARGE':
        return css`
          padding: 0 24px;
          ${({ theme }) => theme.textInputSize.large};
        `;
      case 'MEDIUM':
        return css`
          padding: 0 24px;
          ${({ theme }) => theme.textInputSize.medium};
        `;
      case 'SMALL':
        return css`
          flex-direction: row;
          align-items: center;
          padding: 0 24px;
          ${({ theme }) => theme.textInputSize.small};

          label {
            width: 80px;
          }
        `;
    }
  }}  
  
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

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
  padding: 0;

  ${({ theme }) => theme.fontStyles.textSmall};

  color: ${({ theme }) => theme.colors.titleActive};

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
