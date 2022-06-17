import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tab from 'components/Atoms/Tab';

export default {
  title: 'Components/Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Initial = Template.bind({});
Initial.args = {
  label: '레이블',
  tabStyle: 'DEFAULT',
  count: 3,
  iconInfo: {
    icon: 'Tag',
  },
};
