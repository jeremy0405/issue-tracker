/* eslint-disable storybook/story-exports */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilterBar from 'components/Molecules/FilterBar';

export default {
  title: 'Molecules/FilterBar',
  component: FilterBar,
} as ComponentMeta<typeof FilterBar>;

const Template: ComponentStory<typeof FilterBar> = (args) => <FilterBar {...args} />;

const dropdownList = [
  { id: 1, title: '선택된 필터' },
  { id: 2, title: '선택되지 않은 필터1' },
  { id: 3, title: '선택되지 않은 필터2' },
];

export const Standard = Template.bind({});
Standard.args = {
  indicatorStyle: 'FILTERBAR',
  indicatorLabel: 'Filter',
  dropdownList,
  panelType: 'radio',
  inputSize: 'SMALL',
  inputType: 'text',
  inputStyle: 'FILTERBAR',
  inputValue: 'is:issue is:open',
  inputMaxLength: 53,
  inputPlaceholder: 'Search all issues',
};
