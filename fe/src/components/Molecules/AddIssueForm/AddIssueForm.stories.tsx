import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddIssueForm from 'components/Molecules/AddIssueForm';

export default {
  title: 'Molecules/AddIssueForm',
  component: AddIssueForm,
} as ComponentMeta<typeof AddIssueForm>;

const Template: ComponentStory<typeof AddIssueForm> = (args) => <AddIssueForm {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  inputSize: 'MEDIUM',
  inputType: 'text',
  inputMaxLength: 15,
  inputPlaceholder: '제목',
  textareaSize: 'LARGE',
  textareaMaxLength: 600,
  textareaPlaceholder: '코멘트를 입력하세요',
};
