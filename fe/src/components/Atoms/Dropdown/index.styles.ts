import styled, { css } from 'styled-components';
import { DropdownProps } from 'components/Atoms/Dropdown';

type StyledDropdownProps = Pick<DropdownProps, 'indicatorStyle'>;

const StyledDropdown = styled.details<StyledDropdownProps>`
  position: relative;

  menu {
    position: absolute;
    left: 0;
    top: 45px;
    z-index: 99;
  }

  ${({ indicatorStyle }) =>
    indicatorStyle === 'FILTERBAR' &&
    css`
      &[open] > summary {
        color: ${({ theme }) => theme.colors.body};
        background: ${({ theme }) => theme.colors.line};
      }
    `}

  &[open] > summary::before {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 80;
    display: block;
    cursor: default;
    content: ' ';
    background: transparent;
  }
`;

export default StyledDropdown;
