import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InputRadio } from '.'

export default {
  title: 'InputRadio',
  component: InputRadio,
  argTypes: {}
} as ComponentMeta<typeof InputRadio>

const Template: ComponentStory<typeof InputRadio> = args => <InputRadio {...args} />

export const InputRadioColumn = Template.bind({})
InputRadioColumn.args = {
  title: 'Escolha uma opção',
  optionsList: ['Norte', 'Sul', 'Leste', 'Oeste']
}

export const InputRadioRow = Template.bind({})
InputRadioRow.args = {
  title: 'Escolha uma opção',
  direction: 'row',
  optionsList: ['Norte', 'Sul', 'Leste', 'Oeste']
}
