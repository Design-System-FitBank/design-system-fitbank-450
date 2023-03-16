import * as Styled from './styles'

import { ContainerTab } from '../ContainerTab'
import React from 'react'
import { TabProps } from '../../'

export const Tab: React.FC<TabProps> = ({ title, description, icon, disabled = false, onClick, selected }) => {
  return (
    <Styled.Primary data-testid='tab' onClick={onClick} disabled={disabled} data-selected={selected}>
      <ContainerTab icon={icon} title={title} description={description} />
    </Styled.Primary>
  )
}
