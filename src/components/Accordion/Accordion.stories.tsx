import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Accordion } from '.'

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {}
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = args => <Accordion {...args} />

export const Default = Template.bind({})
Default.args = {
  maxHeight: 150,
  labelStateClose: 'accordion close',
  labelStateOpen: 'accordion open',
  children: (
    <div style={{ height: 320 }}>
      dados
      <br />
      dados
      <br />
      dados
      <br />
      dados
      <br />
      dados
      <br />
      dados
      <br />
      dados
      <br />
      dados
      <br />{' '}
    </div>
  )
}
export const LabelFixed = Template.bind({})
LabelFixed.args = {
  maxHeight: 150,
  labelStateClose: 'accordion close',
  children: (
    <div style={{ height: 320 }}>
      dados
      <br />
      dados
      <br />
      dados
      <br />
      dados
      <br />
      dados
      <br />
      dados
      <br />
      dados
      <br />
      dados
      <br />{' '}
    </div>
  )
}
export const LabelWithout = Template.bind({})
LabelWithout.args = {
  maxHeight: 750,
  openAccordion: true,
  children: (
    <div style={{ height: 320 }}>
      dados
      <br />
      dados
      <br />
      dados
      <br />
      dados
      <br />
      dados
      <br />
      dados
      <br />
      dados
      <br />
      dados
      <br />{' '}
    </div>
  )
}
