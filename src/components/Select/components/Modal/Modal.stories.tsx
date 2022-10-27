
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Modal } from '.'

export default {
  title: 'Select',
  component: Modal,
  argTypes: {}
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

const optionsList = ['First', 'Second', 'Third', 'Fourth', 'Fifth']

export const ModalSelect = Template.bind({})
ModalSelect.args = {
  options: optionsList,
  openModal: true
}