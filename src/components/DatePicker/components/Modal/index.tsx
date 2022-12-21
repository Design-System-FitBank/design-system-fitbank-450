import { Button } from '../../../Button'
import React, { useState } from 'react'

import * as Styled from './styles'
import { Typography } from '../../../Typography'

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMonth, setIsMonth] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleMonthButtonClicked = () => {
    setIsMonth(!isMonth)
  }

  return (
    <Styled.Container data-testid='modal-schedule'>
      <Styled.Header data-testid='modal-header'>
        <Styled.MonthButton data-testid='mounth'>
          <Button
            onClick={handleMonthButtonClicked}
            icon={isMonth ? 'arrowUp' : 'arrowDown'}
            type='secondary'
            iconRight={true}
            size='auto'
          >
            {'Fevereiro'}
          </Button>
        </Styled.MonthButton>

        <Styled.YearsButton>
          <Button onClick={openModal} type='secondary' size='auto'>
            {'2022'}
          </Button>
        </Styled.YearsButton>
      </Styled.Header>

      <Styled.Calendar>
        <Styled.ConfirmationButton>
          <Button type='tertiary' icon='arrowLeft' onClick={() => {}} children='' />
        </Styled.ConfirmationButton>
        <Styled.DateContent>
          <Typography variant='subtitle' children='21' />
        </Styled.DateContent>
        <Styled.ConfirmationButton>
          <Button type='tertiary' icon='arrowRight' onClick={() => {}} children='' />
        </Styled.ConfirmationButton>
      </Styled.Calendar>

      <Styled.Footer>
        <Styled.CancelButton>
          <Button onClick={closeModal} type='tertiary' size='auto'>
            {'Cancelar'}
          </Button>
        </Styled.CancelButton>

        <Styled.ConfirmationButton>
          <Button onClick={closeModal} type='primary' size='auto'>
            {'Ok'}
          </Button>
        </Styled.ConfirmationButton>
      </Styled.Footer>
    </Styled.Container>
  )
}
