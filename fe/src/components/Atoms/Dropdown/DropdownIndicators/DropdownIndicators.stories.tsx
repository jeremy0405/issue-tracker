import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropdownIndicators from 'components/Atoms/Dropdown/DropdownIndicators';

export default {
  title: 'Components/Dropdown/DropdownIndicators',
  component: DropdownIndicators,
} as ComponentMeta<typeof DropdownIndicators>;

const Template: ComponentStory<typeof DropdownIndicators> = (args) => <DropdownIndicators {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  indicatorStyle: 'STANDARD',
  indicatorLabel: 'Filter',
};

export const FilterBar = Template.bind({});
FilterBar.args = {
  ...Standard.args,
  indicatorStyle: 'FILTERBAR',
};
FilterBar.storyName = 'FilterBar';

export const Active = Template.bind({});
Active.args = {
  ...FilterBar.args,
  isActive: true,
};
Active.storyName = 'FilterBar(Active)';

export const SideBar = Template.bind({});
SideBar.args = {
  indicatorStyle: 'SIDEBAR',
  indicatorLabel: '담당자',
};
SideBar.storyName = 'SideBar';
