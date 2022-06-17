import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from 'components/Atoms/Dropdown';
import caret from 'assets/icons/caret.svg';
import checkBoxInitial from 'assets/icons/checkBoxInitial.svg';
import checkBoxActive from 'assets/icons/checkBoxActive.svg';
import checkOffCircle from 'assets/icons/checkOffCircle.svg';
import checkOnCircle from 'assets/icons/checkOnCircle.svg';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  indicatorStyle: 'STANDARD',
  icon: caret,
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
  initIcon: checkOffCircle,
  activeIcon: checkOnCircle,
};

export const CheckBox = Template.bind({});
CheckBox.args = {
  ...FilterBar.args,
  open: true,
  panelType: 'checkbox',
  initIcon: checkBoxInitial,
  activeIcon: checkBoxActive,
};
