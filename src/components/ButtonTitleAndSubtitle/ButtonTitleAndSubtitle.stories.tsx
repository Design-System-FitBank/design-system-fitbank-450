import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ButtonTitleAndSubtitle } from './index'

export default {
  title: 'ButtonTitleAndSubtitle',
  component: ButtonTitleAndSubtitle,
  argTypes: {}
} as ComponentMeta<typeof ButtonTitleAndSubtitle>

const Template: ComponentStory<typeof ButtonTitleAndSubtitle> = args => <ButtonTitleAndSubtitle {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: 'userBank',
  title: 'titulo',
  subtitle: 'subtitulo',
  onClick: () => {}
}