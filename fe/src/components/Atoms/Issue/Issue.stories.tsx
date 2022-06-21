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
  labels: [
    {
      labelId: 0,
      labelTitle: 'documentation',
      labelStyle: 'STANDARD',
      titleColor: 'LIGHT',
      backgroundColor: colors.primary.blue,
    },
    {
      labelId: 1,
      labelTitle: 'FE',
      labelStyle: 'STANDARD',
      titleColor: 'DARK',
      backgroundColor: colors.secondary.lightPurple,
    },
  ],
  writer: {
    id: 1,
    loginId: '도비',
    profileImageUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
  },
  createdAt: '2022-06-17 13:30:00',
  milestoneInfo: {
    id: 1,
    title: '이슈 트래커',
  },
};

export const Default = Template.bind({});
Default.args = IssueInfo;
