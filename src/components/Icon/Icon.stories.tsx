import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon } from '.'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {}
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />

export const Home = Template.bind({})

Home.args = {
  name: 'home'
}
