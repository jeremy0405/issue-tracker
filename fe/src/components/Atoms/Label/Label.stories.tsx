import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles/theme';
import Label from '.';

export default {
  title: 'Components/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Light = Template.bind({});
Light.args = {
  label: '레이블 이름',
  labelStyle: 'DEFAULT',
  textStyle: 'LIGHT',
  color: colors.primary.blue,
};

export const Dark = Template.bind({});
Dark.args = {
  label: '레이블 이름',
  labelStyle: 'DEFAULT',
  textStyle: 'DARK',
  color: colors.line,
};

export const Line = Template.bind({});
Line.args = {
  label: '레이블 이름',
  labelStyle: 'Line',
  color: colors.primary.blue,
};
