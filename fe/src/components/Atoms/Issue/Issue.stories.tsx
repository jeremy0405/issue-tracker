import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles/theme';
import Issue, { IssueInfoType } from 'components/Atoms/Issue';

export default {
  title: 'Components/Issue',
  component: Issue,
} as ComponentMeta<typeof Issue>;

const Template: ComponentStory<typeof Issue> = (args) => <Issue {...args} />;

const IssueInfo: IssueInfoType = {
  id: 1,
  title: '이슈 트래커 개발',
  labelInfo: {
    label: 'documentation',
    labelStyle: 'STANDARD',
    textStyle: 'LIGHT',
    color: colors.primary.blue,
  },
  writer: '도비',
  timeStamp: '2022-06-17 13:30:00',
  milestoneInfo: {
    id: 1,
    title: '이슈 트래커',
  },
};

export const Default = Template.bind({});
Default.args = IssueInfo;
