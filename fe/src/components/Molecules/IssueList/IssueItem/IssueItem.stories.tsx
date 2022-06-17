import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles/theme';
import IssueItem, { IssueItemTypes } from 'components/Molecules/IssueList/IssueItem/';

export default {
  title: 'Molecules/IssueList/IssueItem',
  component: IssueItem,
} as ComponentMeta<typeof IssueItem>;

const Template: ComponentStory<typeof IssueItem> = (args) => <IssueItem {...args} />;

const IssueItemInfo: IssueItemTypes = {
  id: 1,
  title: '이슈 트래커 개발',
  labelInfo: {
    label: 'documentation',
    labelStyle: 'DEFAULT',
    textStyle: 'LIGHT',
    color: colors.primary.blue,
  },
  timeStamp: '2022-06-17 13:30:00',
  milestoneInfo: {
    id: 1,
    title: '이슈 트래커',
  },
  userInfo: {
    imgUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
    userName: '도톨',
    imgSize: 'SMALL',
  },
};

export const Default = Template.bind({});
Default.args = IssueItemInfo;
