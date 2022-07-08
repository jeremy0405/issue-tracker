import styled from 'styled-components';
import Tab, { TabTypes } from 'components/Atoms/Tab';

const StyledTabs = styled.div`
  display: flex;
  min-width: fit-content;
`;

interface TabInfoTypes {
  tabInfos: TabTypes[];
}

const Tabs = ({ tabInfos }: TabInfoTypes) => {
  // eslint-disable-next-line react/destructuring-assignment
  const TabList = tabInfos.map((tab) => {
    const { label, link, count, iconInfo, tabStyle, border, HandleOnClick } = tab;

    return (
      <Tab
        key={`tab-${label}`}
        label={label}
        link={link}
        count={count}
        iconInfo={iconInfo}
        tabStyle={tabStyle}
        border={border}
        HandleOnClick={HandleOnClick}
      />
    );
  });
  return <StyledTabs>{TabList}</StyledTabs>;
};

export default Tabs;
