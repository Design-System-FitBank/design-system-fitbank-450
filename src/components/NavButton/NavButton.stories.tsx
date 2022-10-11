import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NavButton } from '.'
import { Icon } from '../Icon'

export default {
  title: 'NavButton',
  component: NavButton,
  argTypes: {}
} as ComponentMeta<typeof NavButton>

const Template: ComponentStory<typeof NavButton> = args => <NavButton {...args} />

export const NavigatonButton = Template.bind({})
NavigatonButton.args = {
  children: 'NavButton',
  icon: <Icon name='moneyNote' />,
  onClick: () => {}
}
