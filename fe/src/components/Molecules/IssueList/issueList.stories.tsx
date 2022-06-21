import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles/theme';
import IssueList, { IssueListTypes } from 'components/Molecules/IssueList/';

export default {
  title: 'Molecules/IssueList/List',
  component: IssueList,
} as ComponentMeta<typeof IssueList>;

const Template: ComponentStory<typeof IssueList> = (args) => <IssueList {...args} />;

const IssueListInfo: IssueListTypes = {
  openIssueCount: 0,
  closedIssueCount: 0,
  issues: {
    content: [
      {
        id: 0,
        status: 'string',
        title: '이슈 트래커 개발',
        labels: [
          {
            labelId: 0,
            labelTitle: 'documentation',
            titleColor: 'LIGHT',
            backgroundColor: colors.primary.blue,
            description: 'string',
          },
          {
            labelId: 1,
            labelTitle: 'FE',
            titleColor: 'LIGHT',
            backgroundColor: colors.secondary.lightPurple,
            description: 'string',
          },
          {
            labelId: 2,
            labelTitle: 'BE',
            titleColor: 'DARK',
            backgroundColor: colors.success.green,
            description: 'string',
          },
        ],
        createdAt: '2022-06-20T01:05:45.880Z',
        milestoneInfo: {
          id: 0,
          title: '이슈 트래커',
        },
        assignees: [
          {
            id: 0,
            loginId: '도톨',
            profileImageUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
          },
          {
            id: 1,
            loginId: '도비',
            profileImageUrl: 'https://avatars.githubusercontent.com/u/85747667?s=96&v=4',
          },
          {
            id: 2,
            loginId: '후',
            profileImageUrl: 'https://avatars.githubusercontent.com/u/68011320?v=4',
          },
          {
            id: 3,
            loginId: '제리',
            profileImageUrl: 'https://avatars.githubusercontent.com/u/81368630?v=4',
          },
        ],
        writer: {
          id: 0,
          loginId: '제리',
          profileImageUrl: 'https://avatars.githubusercontent.com/u/81368630?v=4',
        },
      },
      {
        id: 1,
        status: 'string',
        title: 'FE 이슈 트래커 개발',
        labels: [
          {
            labelId: 0,
            labelTitle: 'FE',
            titleColor: 'LIGHT',
            backgroundColor: colors.secondary.lightPurple,
            description: 'string',
          },
        ],
        createdAt: '2022-06-20T01:05:45.880Z',
        milestoneInfo: {
          id: 1,
          title: 'FE 이슈 트래커',
        },
        assignees: [
          {
            id: 0,
            loginId: '도톨',
            profileImageUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
          },
          {
            id: 1,
            loginId: '도비',
            profileImageUrl: 'https://avatars.githubusercontent.com/u/85747667?s=96&v=4',
          },
        ],
        writer: {
          id: 0,
          loginId: '도톨',
          profileImageUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
        },
      },
    ],
  },
};

export const Default = Template.bind({});
Default.args = IssueListInfo;
