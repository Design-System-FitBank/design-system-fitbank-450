import React, { useState } from 'react'
import * as Styled from './styles'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import { Button } from '../Button'
import { AccountData } from './AccountDataType'
import { DataAccount } from './DataAccount'
import { Avatar } from '../Avatar'

export interface DetailProps {
  /*
   * variável referente ao estado em que se encontra o compoente:
   * false estado de visibilidade dos dados da conta.
   * true estado sem visibilidade dos dados da conta.
   */
  collapsed?: boolean
  /*
   * Objeto referente aos dados do usuário e da conta bancária, para esse objeto deve ser passado:
   * dados do cliente: BU, nome da conta, cpf ou cnpj.
   * dados do banco: nome do banco, número da conta, identificador.
   */
  accountData: AccountData

  /*
   * Função que recebe o dados da conta após o click no botão copiar.
   */
  copyAccountData: (data: AccountData) => void
}

export const Detail: React.FC<DetailProps> = ({ accountData, collapsed = false, copyAccountData }) => {
  const [isActive, setIsActive] = useState(false)

  const handleCopy = () => {
    const datas = accountData
    copyAccountData(datas)
  }

  return (
    <Styled.Container data-testid='container'>
      <Styled.Accordion data-testid='accordion' isOpen={isActive} collapsed={collapsed}>
        <Styled.Avatar data-testid='avatar'>
          <Avatar type='PJ' />
        </Styled.Avatar>
        <DataAccount.User data-testid='data' accountData={accountData} />
        <Styled.ButtonData data-testid='buttonData' onClick={() => setIsActive(!isActive)}>
          <Styled.Arrow data-testid='arrow'>
            <Icon name={!isActive ? 'arrowDown' : 'arrowUp'} width={20} height={20} />
          </Styled.Arrow>
          <Styled.LabelAccordion data-testid='labelAccordion'>
            <Typography variant='bodySmall'>{!isActive ? 'Ver dados da conta' : 'Esconder dados da conta'}</Typography>
          </Styled.LabelAccordion>
        </Styled.ButtonData>
        <DataAccount.Bank data-testid='dataBank' accountData={accountData} />
      </Styled.Accordion>
      <Styled.CopyData data-testid='copyData' isOpen={isActive}>
        <Styled.Collapsed data-testid='buttonCopy'>
          {collapsed ? (
            <Styled.IconCollapsed data-testid='iconCollapsed'>
              <Icon name='share' width={20} height={20} />
            </Styled.IconCollapsed>
          ) : (
            <Button icon='share' size='small' onClick={handleCopy}>
              Copiar
            </Button>
          )}
        </Styled.Collapsed>
      </Styled.CopyData>
      <Styled.ChangeAccount data-testid='changeAccount'>
        <Styled.Refresh data-testid='refresh'>
          <Icon name='refresh' width={24} height={24}></Icon>
        </Styled.Refresh>
        {!collapsed && (
          <Styled.LabelChangeAccount data-testid='labelChangeAccount'>Trocar conta</Styled.LabelChangeAccount>
        )}
      </Styled.ChangeAccount>
    </Styled.Container>
  )
}
