import { Tab } from "../Tab"
import React from "react"
import * as Styled from "./styles"
import { IconsProps } from "../Icon"

export interface TabsProps{
  /**
   * Define os dados que serão utilizados para a renderização das Tabs
   */
  tabsInfo: TabProps[],
  /**
   * Função de callback que acessa o index da Tab quando clicada
   */
  onClickTab: (index: number) => void
}
export interface TabProps {
  /**
   * Define o texto principal a ser mostrado na aba.
   */
  title: string

  /**
   * Define o texto secundário a ser mostrado na aba.
   */
  description: string

  /**
   * Define o ícone a ser mostrado na aba.
   */
  icon: IconsProps['name']

  /**
   * Define se a aba está desabilitada ou não.
   */
  disabled?: boolean

  /**
   * Função sem retorno que será chamada ao se clicar na aba.
   */
  onClick: () => void
}

export const Tabs: React.FC<TabsProps> = ({tabsInfo, onClickTab}) => {
  const _onClickTab = React.useCallback((index) => {
    onClickTab(index)
  }, [])

  return (
    <Styled.Container data-testid="container">
      {tabsInfo.map((tab, key) => {
        return <Tab 
                  key={key}
                  title={tab.title} 
                  description={tab.description} 
                  icon={tab.icon} 
                  disabled={tab.disabled} 
                  onClick={() => _onClickTab(key)} />
      })}
    </Styled.Container>
  )
}