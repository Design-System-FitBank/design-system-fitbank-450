import React from 'react'
import * as Styled from './styles'
import { ContainerTab } from './components/ContainerTab'
import { TabProps } from '../Tabs'

export const Tab: React.FC<TabProps> = ({ title, description, icon, disabled = false, onClick }) => {
  return (
    <Styled.Primary data-testid='tab' onClick={onClick} disabled={disabled}>
      <ContainerTab icon={icon} title={title} description={description}>
        {title}
        {description}
      </ContainerTab>
    </Styled.Primary>
  )
}
