import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Modal } from '.'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {}
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Título do Modal',
  buttonTitle: 'Aprovar',
  children: 'Corpo do modal',
  isDisable: false,
  onClick: () => {}
}

