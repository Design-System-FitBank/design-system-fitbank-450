import React from 'react'
import { Input } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Input',
  component: Input,
  argTypes: {}
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Default = Template.bind({})
export const Password = Template.bind({})
export const Unlabeled = Template.bind({})
export const WithMessage = Template.bind({})

Default.args = {
  title: 'Input Label',
  placeholder: 'Placeholder',
  type: 'text'
}

Unlabeled.args = {
  placeholder: 'placeholder',
  type: 'text'
}

WithMessage.args = {
  title: 'Input Label',
  placeholder: 'Placeholder',
  type: 'text',
  message: 'custom message'
}

Password.args = {
  title: 'Password',
  placeholder: '••••••••',
  type: 'password',
  disabled: false
}
