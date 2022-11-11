import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {}
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />

export const InputCheckboxColumn = Template.bind({})
InputCheckboxColumn.args = {
  title: 'Escolha uma opção',
  optionsList: ['Norte', 'Sul', 'Leste', 'Oeste'],
  onSelect: ([]) => {}
}

export const InputCheckboxRow = Template.bind({})
InputCheckboxRow.args = {
  title: 'Escolha uma opção',
  isRow: true,
  optionsList: ['Norte', 'Sul', 'Leste', 'Oeste'],
  onSelect: ([]) => {}
}
