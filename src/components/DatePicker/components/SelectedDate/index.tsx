import React, { useState } from 'react'

import * as Styled from './styles'

type SelectDateProps = {
  selected: string
  options: Array<any>
  onClick: (value: string) => void
}

export const SelectedDate: React.FC<SelectDateProps> = ({ selected, options, onClick }) => {
  const [show, setShow] = useState(false)

  const onSelected = (value: string) => {
    onClick(value)
    setShow(false)
  }

  return (
    <>
      <Styled.ButtonDate onClick={() => setShow(!show)}>{selected}</Styled.ButtonDate>
      {show && (
        <Styled.ModalDate data-testid='container'>
          {options.map((item, index) => (
            <Styled.ItemModal key={index} onClick={() => onSelected(item)}>
              {item}
            </Styled.ItemModal>
          ))}
        </Styled.ModalDate>
      )}
    </>
  )
}
