import { useLocation } from 'react-router-dom';
import Icon, { IconType } from 'components/Atoms/Icon/';
import StyledNavLink from 'components/Atoms/Tab/index.styled';

export interface TabProps {
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
}

const defaultLink = '#!';

const Tab = ({ link = defaultLink, label, count, tabStyle = 'STANDARD', iconInfo, border }: TabProps) => {
  const location = useLocation();

  // 라우터가 /issues면 열린 이슈에 포커스
  const focusOpenCloseTab = () => {
    const replaceString = link.replace(/.*?\?/, '?');
    const className = 'openCloseFocus';
    if (location.pathname !== '/issues') return '';

    if (location.search === '' && replaceString === '?q=is:open') return className;

    return location.search === replaceString ? className : '';
  };

  return (
    <StyledNavLink to={link} tabStyle={tabStyle} border={border} className={focusOpenCloseTab()}>
      {iconInfo && <Icon icon={iconInfo.icon} fill={iconInfo.fill} stroke={iconInfo.stroke} />}
      <span>{label}</span>
      <span>({count})</span>
    </StyledNavLink>
  );
};

export default Tab;
