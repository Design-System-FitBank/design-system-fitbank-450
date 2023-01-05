import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tag } from './'

export default {
  title: 'Tag',
  component: Tag,
  argTypes: {}
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />

export const Tags = Template.bind({})

Tags.args = {
  tagButtonList: []
}
