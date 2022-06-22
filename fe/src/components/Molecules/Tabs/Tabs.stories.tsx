import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles/theme';
import { TabTypes } from 'components/Atoms/Tab';
import Tabs from 'components/Molecules/Tabs/';

export default {
  title: 'Molecules/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const LabelMilestoneInfo: TabTypes[] = [
  {
    label: '레이블',
    link: '/labels',
    count: 2,
    iconInfo: { icon: 'Tag' },
    tabStyle: 'FILL',
    border: 'LEFT',
  },
  {
    label: '마일스톤',
    link: '/milestons',
    count: 3,
    iconInfo: { icon: 'Milestone', fill: colors.titleActive },
    tabStyle: 'FILL',
    border: 'RIGHT',
  },
];

const issuesInfo: TabTypes[] = [
  {
    label: '열린 이슈',
    link: '/labels',
    count: 3,
    iconInfo: { icon: 'AlertCircle' },
    tabStyle: 'STANDARD',
  },
  {
    label: '닫힌 이슈',
    link: '/milestons',
    count: 2,
    iconInfo: { icon: 'Archive', stroke: colors.titleActive },
    tabStyle: 'STANDARD',
  },
];

export const Issues = Template.bind({});
Issues.args = { tabInfos: issuesInfo };

export const LabelMilestone = Template.bind({});
LabelMilestone.args = { tabInfos: LabelMilestoneInfo };
