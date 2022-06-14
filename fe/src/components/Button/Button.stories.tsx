import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'components/Button/';

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
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'BUTTON',
  size: 'LARGE',
};
