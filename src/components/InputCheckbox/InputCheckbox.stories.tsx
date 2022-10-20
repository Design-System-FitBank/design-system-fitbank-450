import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InputCheckbox } from '.'

export default {
  title: 'InputCheckbox',
  component: InputCheckbox,
  argTypes: {}
} as ComponentMeta<typeof InputCheckbox>

const Template: ComponentStory<typeof InputCheckbox> = args => <InputCheckbox {...args} />

export const InputCheckboxColumn = Template.bind({})
InputCheckboxColumn.args = {
  title: 'Escolha uma opção',
  optionsList: ['Norte', 'Sul', 'Leste', 'Oeste']
}

export const InputCheckboxRow = Template.bind({})
InputCheckboxRow.args = {
  title: 'Escolha uma opção',
  direction: 'row',
  optionsList: ['Norte', 'Sul', 'Leste', 'Oeste']
}
