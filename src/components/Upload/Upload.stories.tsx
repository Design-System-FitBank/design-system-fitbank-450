import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Upload } from '.'

export default {
  title: 'Upload',
  component: Upload,
  argTypes: {}
} as ComponentMeta<typeof Upload>
const Template: ComponentStory<typeof Upload> = args => <Upload />

export const Default = Template.bind({})
Default.args = {}
