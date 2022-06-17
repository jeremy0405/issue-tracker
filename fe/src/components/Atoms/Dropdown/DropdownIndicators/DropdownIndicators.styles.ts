import { DropdownIndicatorProps } from 'components/Atoms/Dropdown/DropdownIndicators';
import styled, { css } from 'styled-components';

type StyledDropdownIndicatorProps = Pick<DropdownIndicatorProps, 'icon' | 'indicatorStyle' | 'state'>;

const DropdownIndicators = styled.summary<StyledDropdownIndicatorProps>`
display:flex;
align-items:center;  

width: fit-content;
height: fit-content;
list-style: none;

color: ${({ theme }) => theme.colors.label};

${({ theme }) => theme.fontStyles.linkSmall};

${({ theme }) => theme.dropdownIndicatorSize};

&:hover,
  label:hover {
    cursor: pointer;
  }

  &::after {
    content: ${({ icon }) => `url(${icon});`};
    margin-top: 2px;
  }

  ${({ indicatorStyle }) =>
    indicatorStyle === 'FILTERBAR' &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.line};
      border-radius: 11px 0px 0px 11px;
      height: 40px;
      padding: 6px 24px;
      background: ${({ theme }) => theme.colors.background};

      span {
        min-width: 56px;
        height: 28px;
        margin-right: 12px;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.body};
        background: ${({ theme }) => theme.colors.line};
      }
    `}}}

  ${({ state }) =>
    state === 'ACTIVE' &&
    css`
      background: ${({ theme }) => theme.colors.offWhite};
    `}
`;

export default DropdownIndicators;
