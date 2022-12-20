import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PixButton } from './index'

export default {
  title: 'PixButton',
  component: PixButton,
  argTypes: {}
} as ComponentMeta<typeof PixButton>

const Template: ComponentStory<typeof PixButton> = args => <PixButton {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: 'userBank',
  title: 'titulo',
  subtitle: 'subtitulo',
  onClick: () => {}
}