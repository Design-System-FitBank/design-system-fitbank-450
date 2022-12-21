import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Footer } from '.'

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {}
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  message: 'Contact us',
  phoneNumber: '(00) 90000-0000',
  secondaryPhoneNumber: '(00)80000-0000',
  email: 'contact@example.com'
}
