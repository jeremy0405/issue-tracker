/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';

type InputStyleProps = {
  inputSize: 'SMALL' | 'MEDIUM' | 'LARGE';
  disabled?: boolean;
};

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

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.placeholder};
      background: ${({ theme }) => theme.colors.offWhite};
      border: 1px solid ${({ theme }) => theme.colors.titleActive};
    `}

  label {
    ${({ theme }) => theme.fontStyles.textXSmall}
  }

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

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.placeholder};
    background: ${({ theme }) => theme.colors.offWhite};
    outline: 1px solid ${({ theme }) => theme.colors.titleActive};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const maxLength = 12;
export const StyledInput = styled.input.attrs({ type: 'text', maxLength })<InputStyleProps>`
  width: 100%;
  background: transparent;
  border: transparent;
  padding: 0;
  ${({ theme }) => theme.fontStyles.textSmall};

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
