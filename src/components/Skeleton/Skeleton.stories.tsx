import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from '.';

export default {
  title: 'Skeleton',
  component: Skeleton,
  argTypes: {}
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = args => <Skeleton {...args} />

export const Default = Template.bind({})
Default.args = {
  height:100,
  width:500,
  radius:10,
}
export const Circular = Template.bind({})
Circular.args = {
  height:50,
  width:50,
  radius:50,
}