import styled from 'styled-components';
import Tab, { TabProps } from 'components/Atoms/Tab';

const StyledTabs = styled.div`
  display: flex;
`;

interface TabInfoTypes {
  tabInfos: TabProps[];
}

const Tabs = ({ tabInfos }: TabInfoTypes) => {
  // eslint-disable-next-line react/destructuring-assignment
  const Tabs1 = tabInfos.map((tab: TabProps) => {
    const { label, link, count, iconInfo, tabStyle, border } = tab;

    return <Tab label={label} link={link} count={count} iconInfo={iconInfo} tabStyle={tabStyle} border={border} />;
  });
  return <StyledTabs>{Tabs1}</StyledTabs>;
};

export default Tabs;
