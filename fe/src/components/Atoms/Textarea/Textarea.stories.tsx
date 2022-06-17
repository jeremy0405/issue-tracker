import { ComponentStory, ComponentMeta } from '@storybook/react';
import Textarea from 'components/Atoms/Textarea';
import { ReactComponent as PaperClip } from 'assets/icons/paperclip.svg';

export default {
  title: 'Components/Textareas',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  textareaSize: 'MEDIUM',
  textareaPlaceholder: '코멘트를 입력하세요',
  Icon: PaperClip,
};

export const Large = Template.bind({});
Large.args = {
  ...Medium.args,
  textareaSize: 'LARGE',
};
