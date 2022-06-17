import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserImage from 'components/Atoms/UserImage/';

export default {
  title: 'Components/UserImage',
  component: UserImage,
} as ComponentMeta<typeof UserImage>;

const Template: ComponentStory<typeof UserImage> = (args) => <UserImage {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  imgUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
  userName: '도톨',
  imgSize: 'MEDIUM',
};

export const Small = Template.bind({});
Small.args = {
  imgUrl: 'https://avatars.githubusercontent.com/u/85747667?s=96&v=4',
  userName: '도비',
  imgSize: 'SMALL',
};
