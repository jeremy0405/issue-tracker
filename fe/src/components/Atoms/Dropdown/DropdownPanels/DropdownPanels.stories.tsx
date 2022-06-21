import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropdownPanels from 'components/Atoms/Dropdown/DropdownPanels';

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

const labelList = [
  { id: 1, title: '레이블이 없는 이슈' },
  { id: 2, title: 'bug', labelColor: 'red' },
  { id: 3, title: 'documentation', labelColor: 'blue' },
];

const assigneeList = [
  { id: 1, title: '담당자가 없는 이슈' },
  {
    id: 2,
    title: 'dobby',
    userImgUrl: 'https://avatars.githubusercontent.com/u/85747667?s=96&v=4',
  },
  {
    id: 3,
    title: 'dotori',
    userImgUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
  },
];

export const Radio = Template.bind({});
Radio.args = {
  dropdownTitle: '필터이름',
  dropdownList,
  panelType: 'radio',
};

export const CheckBox = Template.bind({});
CheckBox.args = {
  ...Radio.args,
  panelType: 'checkbox',
};

export const Assignee = Template.bind({});
Assignee.args = {
  ...CheckBox.args,
  dropdownTitle: '담당자 필터',
  dropdownList: assigneeList,
};
Assignee.storyName = 'AssigneeFilter';

export const Label = Template.bind({});
Label.args = {
  ...CheckBox.args,
  dropdownTitle: '레이블 필터',
  dropdownList: labelList,
};
Label.storyName = 'LabelFilter';
