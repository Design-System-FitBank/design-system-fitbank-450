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
  maxHeight: 750,
  label: 'Ver dados da conta',
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
