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
      title: "Transferência PIX", 
      description: "Realiza transferência via PIX",
      icon: 'keys',
      onClick: () => {},
    },
    {
      title: "Transferência TED", 
      description: "Realiza transferência utilizando dados bancários",
      icon: 'ticketPayment',
      onClick: () => {}
    },
    {
      title: "Transferência DOC", 
      description: "Realiza transferência utilizando dados bancários",
      icon: 'ticketPayment',
      onClick: () => {}
    },
    {
      title: "Transferência Por CPF", 
      description: "Realiza utilizando dados pessoais",
      icon: 'ticketPayment',
      onClick: () => {}
    },
    {
      title: "Transferência Por CPF", 
      description: "Realiza utilizando dados pessoais",
      icon: 'ticketPayment',
      onClick: () => {}
    }
  ]
}

export const TabDisabled = Template.bind({})
TabDisabled.args = {
    tabsInfo: [
    {
      title: "Transferência PIX", 
      description: "Realiza transferência via PIX",
      icon: 'keys',
      onClick: () => {},
      disabled: true
    },
    {
      title: "Transferência TED", 
      description: "Realiza transferência utilizando dados bancários",
      icon: 'ticketPayment',
      onClick: () => {}
    }
  ]
}