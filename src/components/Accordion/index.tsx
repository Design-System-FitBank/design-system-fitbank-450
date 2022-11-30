import React, { useState } from 'react'
import * as Styled from './styles'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
export interface AccordionProps {
  /*
   * Objeto referente aos dados do usuário e da conta bancária, para esse objeto deve ser passado:
   * dados do cliente: BU, nome da conta, cpf ou cnpj.
   * dados do banco: nome do banco, número da conta, identificador.
   */
  children: JSX.Element

  /**
   * Variável referente ao tamanho máximo da altura do accordion.
   */
  maxHeight?: number
  /**
   * Variável opcional referente ao nome do botão do accordion quando o mesmo estiver em estado open.
   * Observar caso não seja passado nenhum valor a essa variável o accordion em estado open terá o
   * mesmo valor do label em estado close.
   */
  labelStateOpen?: string
  /**
   * Variável referente ao nome do botão do accordion quando o mesmo estiver em estado close.
   */
  labelStateClose: string
}

export const Accordion: React.FC<AccordionProps> = ({ children, maxHeight = 320, labelStateOpen, labelStateClose }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Styled.Container data-testid='container'>
      <Styled.Accordion data-testid='accordion' isOpen={isActive} height={maxHeight}>
        <Styled.Button data-testid='button' onClick={() => setIsActive(!isActive)}>
          <Styled.Arrow data-testid='arrow'>
            <Icon name={!isActive ? 'arrowDown' : 'arrowUp'} width={20} height={20} />
          </Styled.Arrow>
          <Styled.LabelAccordion data-testid='labelAccordion'>
            <Typography variant='bodySmall'>{isActive ? labelStateOpen : labelStateClose}</Typography>
          </Styled.LabelAccordion>
        </Styled.Button>
        {children}
      </Styled.Accordion>
    </Styled.Container>
  )
}
