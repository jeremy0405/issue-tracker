/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';

interface StyledButtonProps {
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 0px 24px;
  border: none;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary.blue};
  color: ${({ theme }) => theme.colors.offWhite};
  cursor: pointer;
  ${({ theme }) => theme.fontStyles.linkMedium};

  ${({ size }) => {
    // eslint-disable-next-line default-case
    switch (size) {
      case 'LARGE':
        return css`
          width: 340px;
          height: 64px;
        `;
      case 'MEDIUM':
        return css`
          width: 240px;
          height: 56px;
        `;
      case 'SMALL':
        return css`
          width: 120px;
          height: 40px;
        `;
    }
  }}

  &:hover:not([disabled]) {
    background: ${({ theme }) => theme.colors.primary.darkBlue};
  }

  &:focus {
    border: 4px solid #c7ebff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export default StyledButton;
