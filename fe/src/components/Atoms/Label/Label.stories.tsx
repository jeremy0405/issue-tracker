import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles/theme';
import Label from 'components/Atoms/Label';

export default {
  title: 'Components/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Light = Template.bind({});
Light.args = {
  label: '레이블 이름',
  labelStyle: 'STANDARD',
  textStyle: 'LIGHT',
  color: colors.primary.blue,
};

export const Dark = Template.bind({});
Dark.args = {
  label: '레이블 이름',
  labelStyle: 'STANDARD',
  textStyle: 'DARK',
  color: colors.line,
};

export const Line = Template.bind({});
Line.args = {
  label: '레이블 이름',
  labelStyle: 'LINE',
  color: colors.primary.blue,
};
