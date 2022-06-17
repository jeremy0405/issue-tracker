import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from 'components/Atoms/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

const dropdownList = [
  { id: 1, title: '선택된 필터' },
  { id: 2, title: '선택되지 않은 필터1' },
  { id: 3, title: '선택되지 않은 필터2' },
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
};

export const Radio = Template.bind({});
Radio.args = {
  ...FilterBar.args,
  open: true,
  panelType: 'radio',
};

export const CheckBox = Template.bind({});
CheckBox.args = {
  ...FilterBar.args,
  open: true,
  panelType: 'checkbox',
};
