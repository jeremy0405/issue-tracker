/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';

interface StyledButtonProps {
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  borderStyle?: 'SECONDARY';
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 0px 24px;
  border: none;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary.blue};
  color: ${({ theme }) => theme.colors.offWhite};
  cursor: pointer;

  ${({ size }) => {
    // eslint-disable-next-line default-case
    switch (size) {
      case 'LARGE':
        return css`
          ${({ theme }) => theme.buttonSize.large};
          ${({ theme }) => theme.fontStyles.linkMedium};
        `;
      case 'MEDIUM':
        return css`
          ${({ theme }) => theme.buttonSize.medium};
          ${({ theme }) => theme.fontStyles.linkMedium};
        `;
      case 'SMALL':
        return css`
          ${({ theme }) => theme.buttonSize.small};
          ${({ theme }) => theme.fontStyles.linkXsmall};
          border-radius: 11px;
        `;
    }
  }}

  &:hover:not([disabled]) {
    background: ${({ theme }) => theme.colors.primary.darkBlue};
  }

  &:active:not([disabled]) {
    border: 4px solid ${({ theme }) => theme.colors.primary.lightBlue};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  ${({ size, borderStyle }) => {
    if (size !== 'SMALL') return;
    if (borderStyle === 'SECONDARY') {
      return css`
        border: 2px solid ${({ theme }) => theme.colors.primary.blue};
        color: ${({ theme }) => theme.colors.primary.blue};
        background: ${({ theme }) => theme.colors.offWhite};

        &:hover:not([disabled]) {
          border: 2px solid ${({ theme }) => theme.colors.primary.darkBlue};
          color: ${({ theme }) => theme.colors.primary.darkBlue};
          background: ${({ theme }) => theme.colors.offWhite};
        }

        &:active:not([disabled]) {
          border: 4px solid ${({ theme }) => theme.colors.primary.lightBlue};
          color: ${({ theme }) => theme.colors.primary.lightBlue};
        }

        &:disabled {
          opacity: 0.5;
          cursor: default;
        }
      `;
    }
  }}
`;

export default StyledButton;
