import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from 'components/Atoms/Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Initial = Template.bind({});
Initial.args = {
  inputType: 'text',
  disabled: false,
  inputSize: 'LARGE',
  inputPlaceholder: '아이디',
  inputMaxLength: 12,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  inputSize: 'LARGE',
  inputPlaceholder: '아이디',
};

export const Typing = Template.bind({});
Typing.args = {
  ...Initial.args,
  inputSize: 'SMALL',
  inputPlaceholder: '제목',
};

export const Password = Template.bind({});
Password.args = {
  ...Initial.args,
  inputType: 'password',
  inputPlaceholder: '비밀번호',
  inputMaxLength: 18,
};

export const FilterBar = Template.bind({});
FilterBar.args = {
  ...Initial.args,
  inputSize: 'SMALL',
  inputStyle: 'FILTERBAR',
  inputValue: 'is:issue is:open',
  inputPlaceholder: 'Search all issues',
  inputMaxLength: 25,
};
