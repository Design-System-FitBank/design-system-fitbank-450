import React from 'react'
import * as Styled from './styles'
import { BlockPath } from './components/BlockPath'

interface InputBreadlineProps {
  /*
   * Recebe um array de objetos que contém uma string com o nome do caminho
   * junto de uma função onClick opcional
  */
  path: {label: string, onClick?: VoidFunction}[]
}

export const Breadline: React.FC<InputBreadlineProps> = ({ path }) => {
  return (
    <Styled.Container>
      {path.map((labelPathBlock, index) => (
        <BlockPath 
          label={labelPathBlock.label}
          first={index === 0 ? true : false}
          last={
            (index === path.length - 1 && path.length != 1 )
            ? true : false
          }

        />
      ))}
    </Styled.Container>
  )
}
