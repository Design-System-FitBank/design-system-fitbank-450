import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Stopwatch } from './'

export default {
  title: 'Stopwatch',
  component: Stopwatch,
  argTypes: {}
} as ComponentMeta<typeof Stopwatch>

const Template: ComponentStory<typeof Stopwatch> = args => <Stopwatch {...args} />

export const DafaultStopwatch = Template.bind({})
DafaultStopwatch.args = {
  initialTime: 90
}
