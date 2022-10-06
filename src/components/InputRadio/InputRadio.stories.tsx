import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InputRadio } from '.'

export default {
  title: 'InputRadio',
  component: InputRadio,
  argTypes: {}
} as ComponentMeta<typeof InputRadio>

const Template: ComponentStory<typeof InputRadio> = args => <InputRadio {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Escolha uma opção',
  optionsList: ['Norte', 'Sul', 'Leste', 'Oeste'],
  onclick: () => {}
}
