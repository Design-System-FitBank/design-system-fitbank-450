import styled from 'styled-components'

type CheckboxProps = {
  direction: string
}

export const Container = styled.div<CheckboxProps>`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'row' ? 'row' : 'column')};
`
