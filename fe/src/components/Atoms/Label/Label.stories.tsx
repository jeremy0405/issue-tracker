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
  labelId: 0,
  labelTitle: '레이블 이름',
  labelStyle: 'STANDARD',
  titleColor: 'LIGHT',
  backgroundColor: colors.primary.blue,
  description: 'string',
};

export const Dark = Template.bind({});
Dark.args = {
  labelId: 1,
  labelTitle: '레이블 이름',
  labelStyle: 'STANDARD',
  titleColor: 'DARK',
  backgroundColor: colors.line,
};

export const Line = Template.bind({});
Line.args = {
  labelId: 2,
  backgroundColor: colors.line,
  labelTitle: '작성자',
  labelStyle: 'LINE',
};
