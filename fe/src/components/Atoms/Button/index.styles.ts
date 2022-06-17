/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';
import { ButtonProps } from 'components/Atoms/Button';

type StyledButtonProps = Pick<ButtonProps, 'size' | 'buttonStyle'>;

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  border: none;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary.blue};
  color: ${({ theme }) => theme.colors.offWhite};
  cursor: pointer;

  svg {
    margin-right: 4px;
  }

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
          padding: 0px 20px;
          border-radius: 11px;
          ${({ theme }) => theme.buttonSize.small};
          ${({ theme }) => theme.fontStyles.linkXsmall};
        `;
    }
  }}

  ${({ buttonStyle }) => {
    if (buttonStyle === 'DEFAULT') {
      return css`
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
      `;
    }
  }} 

  ${({ size, buttonStyle }) => {
    if (size !== 'LARGE') return;
    if (buttonStyle === 'GITHUB_LOGIN') {
      return css`
        background: ${({ theme }) => theme.colors.titleActive};
      `;
    }
  }}

  ${({ size, buttonStyle }) => {
    if (size !== 'SMALL') return;
    if (buttonStyle === 'SECONDARY') {
      return css`
        border: 2px solid ${({ theme }) => theme.colors.primary.blue};
        color: ${({ theme }) => theme.colors.primary.blue};
        background: ${({ theme }) => theme.colors.offWhite};

        path {
          stroke: ${({ theme }) => theme.colors.primary.blue};
        }

        &:hover:not([disabled]) {
          border: 2px solid ${({ theme }) => theme.colors.primary.darkBlue};
          color: ${({ theme }) => theme.colors.primary.darkBlue};
          background: ${({ theme }) => theme.colors.offWhite};

          path {
            stroke: ${({ theme }) => theme.colors.primary.darkBlue};
          }
        }

        &:active:not([disabled]) {
          border: 4px solid ${({ theme }) => theme.colors.primary.lightBlue};
          color: ${({ theme }) => theme.colors.primary.blue};

          path {
            stroke: ${({ theme }) => theme.colors.primary.blue};
          }
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
