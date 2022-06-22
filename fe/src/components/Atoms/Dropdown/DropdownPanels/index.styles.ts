import styled from 'styled-components';

interface DropdownListTypes {
  initIcon: string;
  activeIcon: string;
}

export const DropdonwTitle = styled.h3`
  height: 48px;
  border-radius: 16px 16px 0px 0px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.line};

  background: ${({ theme }) => theme.colors.background};
`;

export const DropdownList = styled.ul<DropdownListTypes>`
  background: ${({ theme }) => theme.colors.offWhite};

  li {
    display: grid;
    height: 44px;

    label {
      color: ${({ theme }) => theme.colors.body};
      ${({ theme }) => theme.fontStyles.textSmall};
    }

    input {
      display: none;
      &:checked ~ label::after {
        content: ${({ activeIcon }) => `url(${activeIcon});`};
      }
    }

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    }

    label {
      display: flex;

      svg,
      img {
        margin-right: 8px;
      }

      &::after {
        content: ${({ initIcon }) => `url(${initIcon});`};
        margin-left: auto;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const StyledDropdownPanels = styled.menu`
  border-radius: 16px;
  width: 240px;

  h3,
  label {
    display: grid;
    align-items: center;
    padding: 7px 16px;
  }

  border: 1px solid ${({ theme }) => theme.colors.line};
`;
