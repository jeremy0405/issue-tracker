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
  return (
    <StyledNavLink to={link} tabStyle={tabStyle} border={border}>
      {iconInfo && <Icon icon={iconInfo.icon} fill={iconInfo.fill} stroke={iconInfo.stroke} />}
      <span>{label}</span>
      <span>({count})</span>
    </StyledNavLink>
  );
};

export default Tab;
