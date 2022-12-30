import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Tabs } from "./";

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {}
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = args => <Tabs {...args}/>

export const Default = Template.bind({})
Default.args = {
  tabsInfo: [
    {
      title: "Transferencia PIX", 
      description: "Realiza tranferência via PIX",
      icon: 'keys',
      onClick: () => {}
    },
    {
      title: "Transferencia TED", 
      description: "Realiza utilizando dados bancários",
      icon: 'ticketPayment',
      onClick: () => {}
    },
    {
      title: "Transferencia TED", 
      description: "Realiza utilizando dados bancários",
      icon: 'ticketPayment',
      onClick: () => {}
    },
    {
      title: "Transferencia TED", 
      description: "Realiza utilizando dados bancários",
      icon: 'ticketPayment',
      onClick: () => {}
    }
  ]
}

export const Disabled = Template.bind({})
Disabled.args = {
  tabsInfo: [
    {
      title: "Transferencia PIX", 
      description: "Realiza tranferência via PIX",
      icon: 'keys',
      onClick: () => {}
    },
    {
      title: "Transferencia TED", 
      description: "Realiza utilizando dados bancários",
      icon: "ticketPayment",
      onClick: () => {}
    }
  ]
}