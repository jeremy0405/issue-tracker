import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles/theme';
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
  buttonStyle: 'STANDARD',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'BUTTON',
  size: 'LARGE',
  buttonStyle: 'STANDARD',
};

export const GithubLogin = Template.bind({});
GithubLogin.args = {
  disabled: false,
  label: 'GitHub 계정으로 로그인',
  size: 'LARGE',
  buttonStyle: 'GITHUB_LOGIN',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  disabled: true,
  label: 'BUTTON',
  size: 'MEDIUM',
  buttonStyle: 'STANDARD',
  iconInfo: {
    icon: 'Milestone',
    stroke: colors.offWhite,
    fill: colors.offWhite,
  },
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
  disabled: false,
  label: 'BUTTON',
  size: 'SMALL',
  buttonStyle: 'SECONDARY',
  iconInfo: {
    icon: 'Plus',
  },
};
