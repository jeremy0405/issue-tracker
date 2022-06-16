import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from 'components/Atoms/Icon';
import { colors } from 'styles/theme';

export default {
  title: 'Components/Icons',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const AlertCircle = Template.bind({});
AlertCircle.args = {
  icon: 'AlertCircle',
  stroke: `${colors.primary.blue}`,
  fill: `${colors.primary.lightBlue}`,
};

export const Archive = Template.bind({});
Archive.args = {
  icon: 'Archive',
  stroke: `${colors.secondary.purple}`,
  fill: `${colors.secondary.lightPurple}`,
};

export const Calendar = Template.bind({});
Calendar.args = {
  icon: 'Calendar',
  stroke: `${colors.primary.blue}`,
  fill: `${colors.primary.lightBlue}`,
};

export const Edit = Template.bind({});
Edit.args = {
  icon: 'Edit',
  stroke: `${colors.secondary.purple}`,
};

export const Milestone = Template.bind({});
Milestone.args = {
  icon: 'Milestone',
  fill: `${colors.secondary.purple}`,
};

export const Plus = Template.bind({});
Plus.args = {
  icon: 'Plus',
  stroke: `${colors.titleActive}`,
};

export const RefreshCcw = Template.bind({});
RefreshCcw.args = {
  icon: 'RefreshCcw',
  stroke: `${colors.titleActive}`,
};

export const Search = Template.bind({});
Search.args = {
  icon: 'Search',
  stroke: `${colors.titleActive}`,
};

export const Smile = Template.bind({});
Smile.args = {
  icon: 'Smile',
  stroke: `${colors.success.green}`,
};

export const Tag = Template.bind({});
Tag.args = {
  icon: 'Tag',
  stroke: `${colors.label}`,
};

export const Trash = Template.bind({});
Trash.args = {
  icon: 'Trash',
  stroke: `${colors.label}`,
};

export const XSquare = Template.bind({});
XSquare.args = {
  icon: 'XSquare',
  stroke: `${colors.label}`,
};
