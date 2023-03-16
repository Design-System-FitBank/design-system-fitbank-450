import React from 'react'
import * as Styled from './styles'
import { BlockPath } from './components/BlockPath'
import { LastPath } from './components/LastPath'
import { Typography } from '../Typography'

export interface InputBreadlineProps {
  /*
   * Recebe um array de objetos que contém uma string com o nome do caminho
   * junto de uma função onClick opcional
   */
  path: string[]
  onClick?: (route: string) => void
}

export const Breadline: React.FC<InputBreadlineProps> = ({ path, onClick }) => {
  return (
    <Styled.Container data-testid='container'>
      <Styled.Home data-testid='home' onClick={() => onClick!('Início')}>
        <Typography variant='captionBold'>Início</Typography>
      </Styled.Home>
      <Styled.Bloc data-testid='bloc'>
        {path.map((labelPathBlock, index) => (
          <>
            {index === 0 && path.length === 1 ? (
              <LastPath label={labelPathBlock} />
            ) : (
              index !== path.length - 1 && (
                <Styled.Route onClick={() => onClick!(labelPathBlock)}>
                  <BlockPath label={labelPathBlock} />
                </Styled.Route>
              )
            )}
            {index === path.length - 1 && path.length !== 1 && <LastPath label={labelPathBlock} />}
          </>
        ))}
      </Styled.Bloc>
    </Styled.Container>
  )
}
