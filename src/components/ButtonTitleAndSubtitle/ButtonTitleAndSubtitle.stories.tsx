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

export const ButtonDisabled = Template.bind({})

export const OnlyTitle = Template.bind({})

export const TitleAndSubtitleEmpty = Template.bind({})

Default.args = {
  icon: 'userBank',
  title: 'titulo',
  subtitle: 'subtitulo',
  onClick: () => {}
}

ButtonDisabled.args = {
  icon: 'adress',
  title: 'Desabilitado',
  subtitle: 'subtitulo',
  disabled: true,
  onClick: () => {}
}

OnlyTitle.args = {
  icon: 'adress',
  title: 'Desabilitado',
  onClick: () => {}
}

TitleAndSubtitleEmpty.args = {
  icon: 'adress',
  onClick: () => {}
}
