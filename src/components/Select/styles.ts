import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px 12px 12px 16px;
  gap: 8px;

  background: #ffffff;

  border: 1px solid #c4c4c4;
  border-radius: 6px;

  max-width: 320px;
  max-height: 48px;
`

export const Label = styled.label``

export const Icon = styled.div`
  cursor: pointer;
`

export const Input = styled.input`
  width: 255px;

  background: transparent;
  border: none;

  &::placeholder {
    font-size: ${({ theme }) => theme.sizes['18px']};

    color: #c4c4c4;
  }
`
