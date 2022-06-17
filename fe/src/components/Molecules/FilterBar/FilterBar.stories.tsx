/* eslint-disable storybook/story-exports */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilterBar from 'components/Molecules/FilterBar';

export default {
  title: 'Molecules/FilterBar',
  component: FilterBar,
} as ComponentMeta<typeof FilterBar>;

const Template: ComponentStory<typeof FilterBar> = () => <FilterBar />;

export const Standard = Template.bind({});
Standard.args = {};
