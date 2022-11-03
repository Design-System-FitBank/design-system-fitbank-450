import React from 'react'
import * as Styled from './styles'
import { Icon } from '../Icon'
import { DataUser } from './DataUser'
import { Typography } from '../Typography'
import { Button } from '../Button'

export interface DetailProps {
  dataUser: { businessUnit: string; accountName: string; uniqueIdentifier: string }
  onClick: () => void
}

export const Detail: React.FC<DetailProps> = ({ dataUser, onClick }) => {
  return (
    <>
      <Styled.Container data-testid='container'>
        <Styled.Avatar data-testid='avatar'>
          <Icon name='enterprise' />
        </Styled.Avatar>
        <DataUser data-testid='data' dataUser={dataUser} />
        <Styled.Accordion data-testid='accordion'>
          <Styled.Arrow data-testid='arrow'>
            <Icon name='arrowDown' width={20} height={20}></Icon>
          </Styled.Arrow>
          <Styled.LabelAccordion data-testid='labelAccordion'>
            <Typography variant='subtitle'>Ver dados da conta</Typography>
          </Styled.LabelAccordion>
        </Styled.Accordion>
        <Styled.CopyData data-testid='copyData'>
          <Button icon='share' onClick={onClick} size='small'>
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
    </>
  )
}
