import styled, { css } from 'styled-components';
import { SideBarListType } from 'components/Molecules/SideBar';
import { colors, fontStyles } from 'styles/theme';

export const StyledSideBar = styled.div`
  display: table;
  border-collapse: collapse;
  border-style: hidden;
  border-radius: 16px;
  box-shadow: 0 0 0 1px ${colors.line};
  width: fit-content;
  height: fit-content;

  menu {
    left: 0px;
    top: 37px;
  }

  summary {
    border: none;
    padding: 0px;
  }

  .table-row {
    display: table-row;
  }
`;

export const SideBarItem = styled.div`
  display: table-cell;
  width: 308px;
  padding: 32px;

  border: 1px solid ${colors.line};

  &:first-child {
    border-radius: 16px 16px 0px 0px;
  }

  &:last-child {
    border-radius: 0px 0px 16px 16px;
  }
`;

type ContentProps = Pick<SideBarListType, 'type'>;

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  & > div {
    margin-top: 18px;
    margin-right: 3px;
  }

  p {
    ${fontStyles.textSmall}
    color: ${colors.label}
  }

  ${({ type }) =>
    (type === 'ASSIGN' || type === 'MILESTONE') &&
    css`
      align-items: flex-start;
      flex-direction: column;
    `}
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 16px;
  }

  img {
    margin-right: 5px;
  }
`;
