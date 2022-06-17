import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropdownPanels from 'components/Atoms/Dropdown/DropdownPanels';
import checkBoxInitial from 'assets/icons/checkBoxInitial.svg';
import checkBoxActive from 'assets/icons/checkBoxActive.svg';
import checkOffCircle from 'assets/icons/checkOffCircle.svg';
import checkOnCircle from 'assets/icons/checkOnCircle.svg';

export default {
  title: 'Components/Dropdown/DropdownPanels',
  component: DropdownPanels,
} as ComponentMeta<typeof DropdownPanels>;

const Template: ComponentStory<typeof DropdownPanels> = (args) => <DropdownPanels {...args} />;

const dropdownList = [
  { id: 1, title: '선택된 필터' },
  { id: 2, title: '선택되지 않은 필터1' },
  { id: 3, title: '선택되지 않은 필터2' },
];

export const Radio = Template.bind({});
Radio.args = {
  dropdownTitle: '필터이름',
  dropdownList,
  panelType: 'radio',
  initIcon: checkOffCircle,
  activeIcon: checkOnCircle,
};

export const CheckBox = Template.bind({});
CheckBox.args = {
  ...Radio.args,
  panelType: 'checkbox',
  initIcon: checkBoxInitial,
  activeIcon: checkBoxActive,
};
