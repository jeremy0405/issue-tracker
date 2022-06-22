import { ComponentStory, ComponentMeta } from '@storybook/react';
import SmallLabel from 'components/Atoms/SmallLabel';

export default {
  title: 'Atoms/SmallLabel',
  component: SmallLabel,
} as ComponentMeta<typeof SmallLabel>;

const Template: ComponentStory<typeof SmallLabel> = (args) => <SmallLabel {...args} />;

export const Initial = Template.bind({});
Initial.args = {};

export const Red = Template.bind({});
Red.args = {
  fill: 'red',
};
