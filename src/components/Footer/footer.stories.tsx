import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Footer } from './'

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {}
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Footer'
}
