import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon } from '.'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {}
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />

<<<<<<< HEAD
export const Default = Template.bind({})

Default.args = {
=======
export const Home = Template.bind({})

Home.args = {
>>>>>>> 23b7fcc465477e28dbaec829e7969b17c5ec0d06
  name: 'home'
}
