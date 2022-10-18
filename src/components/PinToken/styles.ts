import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const PinBox = styled.div`
  width: ${({ theme }) => theme.sizes['42px']};
  height: ${({ theme }) => theme.sizes['42px']};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.light};

  border: 1px solid ${({ theme }) => theme.colors.textDisabled};
  border-radius: ${({ theme }) => theme.sizes['6px']};
`