import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from 'components/Input/';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Initial = Template.bind({});
Initial.args = {
  disabled: false,
  inputSize: 'LARGE',
  placeholder: '아이디',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  inputSize: 'LARGE',
  placeholder: '아이디',
};

export const Typing = Template.bind({});
Typing.args = {
  ...Initial.args,
  inputSize: 'SMALL',
  placeholder: '제목',
};
