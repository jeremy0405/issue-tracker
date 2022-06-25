import { ComponentStory, ComponentMeta } from '@storybook/react';
import Milestone from 'components/Atoms/Milestone';

export default {
  title: 'Atoms/Milestone',
  component: Milestone,
} as ComponentMeta<typeof Milestone>;

const Template: ComponentStory<typeof Milestone> = (args) => <Milestone {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  openIssueCount: 3,
  closedIssueCount: 4,
};
