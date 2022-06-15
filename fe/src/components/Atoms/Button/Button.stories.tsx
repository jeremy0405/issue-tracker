import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'components/Atoms/Button';

export default {
  title: 'Components/Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Initial = Template.bind({});
Initial.args = {
  disabled: false,
  label: 'BUTTON',
  size: 'LARGE',
  buttonStyle: 'DEFAULT',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'BUTTON',
  size: 'LARGE',
  buttonStyle: 'DEFAULT',
};

export const GithubLogin = Template.bind({});
GithubLogin.args = {
  disabled: false,
  label: 'GitHub 계정으로 로그인',
  size: 'LARGE',
  buttonStyle: 'GITHUB_LOGIN',
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
  disabled: false,
  label: 'BUTTON',
  size: 'SMALL',
  buttonStyle: 'SECONDARY',
};
