import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Radio } from '.'

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {}
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = args => <Radio {...args} />

export const InputRadioColumn = Template.bind({})
InputRadioColumn.args = {
  title: 'Escolha uma opção',
  isColumn: true,
  optionsList: ['Norte', 'Sul', 'Leste', 'Oeste']
}

export const InputRadioRow = Template.bind({})
InputRadioRow.args = {
  title: 'Escolha uma opção',
  optionsList: ['Norte', 'Sul', 'Leste', 'Oeste']
}
