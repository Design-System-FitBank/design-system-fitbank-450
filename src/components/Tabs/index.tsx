import { Tab, TabProps } from "../Tab"
import React from "react"
import * as Styled from "./styles"

export interface TabsProps{
  tabsInfo: TabProps[]
}

export const Tabs: React.FC<TabsProps> = ({tabsInfo}) => {
  return (
    <Styled.Container data-testid="container">
      {tabsInfo.map((tab, key) => {
        return <Tab 
                  key={key}
                  title={tab.title} 
                  description={tab.description} 
                  icon={tab.icon} 
                  disabled={tab.disabled} 
                  onClick={tab.onClick} />
      })}
    </Styled.Container>
  )
}