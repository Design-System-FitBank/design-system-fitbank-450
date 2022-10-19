import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from '.'

export default {
  title: 'Input',
  component: Input,
  argTypes: {}
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Default = Template.bind({})
export const Password = Template.bind({})
export const InputError = Template.bind({})

Default.args = {
  title: 'Input Label',
  placeholder: 'Placeholder',
  type: 'text',
  disabled: false
}

Password.args = {
  title: 'Input Label',
  placeholder: '••••••••',
  type: 'password',
  disabled: false
}

InputError.args = {
  title: 'Input Label',
  placeholder: 'Placeholder',
  type: 'text',
  validated: 'Messagem de erro'
}
