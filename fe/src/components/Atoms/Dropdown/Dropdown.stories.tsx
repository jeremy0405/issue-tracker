import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from 'components/Atoms/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

const dropdownList = [
  { id: 1, title: '선택된 필터' },
  { id: 2, title: 'bug', labelColor: 'red' },
  {
    id: 3,
    title: 'dobby',
    userImgUrl: 'https://avatars.githubusercontent.com/u/85747667?s=96&v=4',
  },
];

export const Standard = Template.bind({});
Standard.args = {
  indicatorStyle: 'STANDARD',
  indicatorLabel: 'Filter',
  dropdownList,
  open: false,
};

export const FilterBar = Template.bind({});
FilterBar.args = {
  ...Standard.args,
  indicatorStyle: 'FILTERBAR',
  panelType: 'radio',
};
FilterBar.storyName = 'FilterBar(radio)';

export const FilterBarOpen = Template.bind({});
FilterBarOpen.args = {
  ...FilterBar.args,
  open: true,
};
FilterBarOpen.storyName = 'FilterBar(open)';

export const SideBar = Template.bind({});
SideBar.args = {
  ...Standard.args,
  indicatorStyle: 'SIDEBAR',

  panelType: 'checkbox',
};
SideBar.storyName = 'SideBar(checkbox)';

export const SideBarOpen = Template.bind({});
SideBarOpen.args = {
  ...SideBar.args,
  open: true,
};
SideBarOpen.storyName = 'SideBar(open)';
