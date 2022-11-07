import React, { useState } from 'react'
import * as Styled from './styles'
import { Icon } from '../Icon'
import { DataUser } from './DataUser'
import { Typography } from '../Typography'
import { Button } from '../Button'
import { User, DataBank } from './AccountDataType'
import { DataAccount } from './DataAccount'
import { data } from 'cypress/types/jquery'

export interface DetailProps {
  /*
   * Objeto referente aos dados do usuário, para esse objeto deve ser passado:
   * BU, nome da conta, cpf ou cnpj.
   */
  dataUser: User
  /*
   * Objeto referente aos dados da conta, nesse objeto deve ser passado:
   * nome do banco, número da agência, número da conta e o indentificador da conta.
   */
  dataBank: DataBank
}

export const Detail: React.FC<DetailProps> = ({ dataUser, dataBank }) => {
  const [isActive, setIsActive] = useState(false)

  const copyAccountData = () => {
    const datas = dataBank
  }

  return (
    <Styled.Container data-testid='container'>
      <Styled.Avatar data-testid='avatar'>
        <Icon name='enterprise' />
      </Styled.Avatar>
      <DataUser data-testid='data' dataUser={dataUser} />
      <Styled.Accordion data-testid='accordion' onClick={() => setIsActive(!isActive)}>
        <Styled.Arrow data-testid='arrow'>
          <Icon name={!isActive ? 'arrowDown' : 'arrowUp'} width={20} height={20}></Icon>
        </Styled.Arrow>
        <Styled.LabelAccordion data-testid='labelAccordion'>
          <Typography variant='subtitle'>{!isActive ? 'Ver dados da conta' : 'Esconder dados da conta'}</Typography>
        </Styled.LabelAccordion>
      </Styled.Accordion>
      {isActive && <DataAccount data-testid='dataBank' dataBank={dataBank} />}
      <Styled.CopyData data-testid='copyData'>
        <Button icon='share' size='small' onClick={copyAccountData}>
          Copiar
        </Button>
      </Styled.CopyData>
      <Styled.ChangeAccount data-testid='changeAccount'>
        <Styled.Refresh data-testid='refresh'>
          <Icon name='refresh' width={20} height={20}></Icon>
        </Styled.Refresh>
        <Styled.LabelChangeAccount data-testid='labelChangeAccount'>Trocar de conta</Styled.LabelChangeAccount>
      </Styled.ChangeAccount>
    </Styled.Container>
  )
}
