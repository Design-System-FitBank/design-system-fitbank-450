import React from 'react'
import { Upload } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Upload',
  component: Upload,
  argTypes: {}
} as ComponentMeta<typeof Upload>

const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args}/>

export const Default = Template.bind({})
Default.args = {}
