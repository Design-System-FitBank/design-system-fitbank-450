import React, { useState } from 'react'
import * as Styled from './styles'
import { Icon } from '../Icon'
import { DataUser } from './DataUser'
import { Typography } from '../Typography'
import { Button } from '../Button'
import { User, DataBank } from './Data'
import { DataAccount } from './DataAccount'

export interface DetailProps {
  dataUser: User
  dataBank: DataBank
  copy: () => void
}

export const Detail: React.FC<DetailProps> = ({ dataUser, dataBank, copy }) => {
  const [isActive, setIsActive] = useState(false)
  console.log(isActive)

  return (
    <Styled.Container data-testid='container'>
      <Styled.Avatar data-testid='avatar'>
        <Icon name='enterprise' />
      </Styled.Avatar>
      <DataUser data-testid='data' dataUser={dataUser} />
      <Styled.Accordion data-testid='accordion' onClick={() => setIsActive(!isActive)}>
        <Styled.Arrow data-testid='arrow'>
          {!isActive ? (
            <Icon name='arrowDown' width={20} height={20}></Icon>
          ) : (
            <Icon name='arrowUp' width={20} height={20}></Icon>
          )}
        </Styled.Arrow>
        <Styled.LabelAccordion data-testid='labelAccordion'>
          {!isActive ? (
            <Typography variant='subtitle'>Ver dados da conta</Typography>
          ) : (
            <Typography variant='subtitle'>Esconder dados da conta</Typography>
          )}
        </Styled.LabelAccordion>
      </Styled.Accordion>
      {isActive && <DataAccount data-testid='dataBank' dataBank={dataBank} />}
      <Styled.CopyData data-testid='copyData'>
        <Button icon='share' size='small' onClick={copy}>
          Copiar
        </Button>
      </Styled.CopyData>
      <Styled.ChangeAccount data-testid='changeAccount'>
        <Styled.Refresh data-testid='refresh'>
          <Icon name='refresh' width={20} height={20}></Icon>
        </Styled.Refresh>
        <Styled.LabelChangeAccount data-testid='labelChangeAccount'>
          <Typography variant='subtitle'>Trocar de conta</Typography>
        </Styled.LabelChangeAccount>
      </Styled.ChangeAccount>
    </Styled.Container>
  )
}
