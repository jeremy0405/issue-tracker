import React from 'react';

import { useRecoilValue } from 'recoil';
import { QueryStringState } from 'pages/Issues';

import Icon, { IconType } from 'components/Atoms/Icon/';
import StyledNavLink from 'components/Atoms/Tab/index.styled';

export interface TabTypes {
  link: string;
  iconInfo: {
    icon: IconType;
    stroke?: string;
    fill?: string;
  };
  label: string;
  count: number;
  tabStyle: 'STANDARD' | 'FILL';
  border?: 'LEFT' | 'CENTER' | 'RIGHT';
  HandleOnClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const defaultLink = '#!';

const Tab = ({ link = defaultLink, tabStyle = 'STANDARD', ...props }: TabTypes) => {
  const { label, count, iconInfo, border, HandleOnClick } = props;

  const focusOpenCloseTab = () => {
    const recoilValue = useRecoilValue(QueryStringState);

    if (recoilValue.status === 'open' && label === '열린 이슈') return true;
    if (recoilValue.status === 'closed' && label === '닫힌 이슈') return true;

    return false;
  };

  return (
    <StyledNavLink
      to={link}
      tabStyle={tabStyle}
      border={border}
      className={focusOpenCloseTab() ? 'openCloseFocus' : ''}
      onClick={HandleOnClick}
    >
      {iconInfo && <Icon icon={iconInfo.icon} fill={iconInfo.fill} stroke={iconInfo.stroke} />}
      <span>{label}</span>
      <span>({count})</span>
    </StyledNavLink>
  );
};

export default Tab;
